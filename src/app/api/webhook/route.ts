import { type NextRequest, NextResponse } from "next/server"

// The actual webhook URL that we'll call from the server side
const WEBHOOK_URL = "https://n8n.karhuno.info/webhook/05a5f9e4-8be4-4d6a-b53c-12705aaa24a8"

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
      userAgent: request.headers.get("user-agent") || "Unknown",
      ipAddress: request.headers.get("x-forwarded-for") || "Unknown",
      referer: request.headers.get("referer") || "Unknown",
    }

    // Only send to external webhook if enabled
    if (SEND_TO_EXTERNAL) {
      try {
        // Forward the data to the n8n webhook from the server side
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrichedData),
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          console.warn(`Webhook forwarding failed with status: ${response.status}`)
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
      message: SEND_TO_EXTERNAL ? "Data forwarded to webhook" : "Data logged (external webhook disabled)",
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
