import { type NextRequest, NextResponse } from "next/server"

// The actual webhook URL that we'll call from the server side
const WEBHOOK_URL = "https://n8n.karhuno.info/webhook/getready"
const TEST_WEBHOOK_URL = "https://n8n.karhuno.info/webhook-test/getready"

// Flag to control whether we actually send data to the external webhook
// Default to true unless explicitly set to "false"
const SEND_TO_EXTERNAL = process.env.SEND_TO_EXTERNAL !== "false"

export async function POST(request: NextRequest) {
  try {
    // Get the data from the request
    const data = await request.json()

    // Add metadata
    const enrichedData = {
      ...data,
      timestamp: new Date().toISOString(),
      source: "karhuno.com",
    }

    // Only send to external webhook if enabled
    if (SEND_TO_EXTERNAL) {
      try {
        // Forward the data to both n8n webhooks from the server side
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        // Отправка на основной вебхук
        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrichedData),
          signal: controller.signal,
        })

        // Отправка на тестовый вебхук
        const testResponse = await fetch(TEST_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrichedData),
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          console.warn(`Main webhook forwarding failed with status: ${response.status}`)
          // Continue anyway - don't fail the user experience
        }

        if (!testResponse.ok) {
          console.warn(`Test webhook forwarding failed with status: ${testResponse.status}`)
          // Continue anyway - don't fail the user experience
        }
      } catch (webhookError) {
        // Log the webhook error but don't fail the request
        console.error("Webhook forwarding error:", webhookError)
      }
    }

    // Return success response regardless of webhook success
    return NextResponse.json({
      success: true,
      message: SEND_TO_EXTERNAL ? "Data forwarded to webhooks" : "Data logged (external webhook disabled)",
    })
  } catch (error) {
    console.error("Webhook proxy error:", error)
    // Return a success response anyway to not break the user experience
    return NextResponse.json({
      success: true,
      message: "Request processed but webhook delivery had issues",
      error: String(error),
    })
  }
}
