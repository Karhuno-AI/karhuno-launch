import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Use our own API endpoint as the webhook URL instead of the external one
const WEBHOOK_PROXY_URL = "/api/webhook"

/**
 * Middleware to capture form submissions and send them to the webhook
 */
export async function webhookMiddleware(request: NextRequest) {
  // Only process POST requests to API routes that might contain form data
  if (request.method === "POST" && request.url.includes("/api/")) {
    try {
      // Clone the request to read the body without consuming it
      const clonedRequest = request.clone()

      // Try to parse the body as JSON
      let body
      try {
        body = await clonedRequest.json()
      } catch (e) {
        // If it's not JSON, try to parse as form data
        try {
          const formData = await clonedRequest.formData()
          body = Object.fromEntries(formData.entries())
        } catch (formError) {
          // If we can't parse the body, just continue
          console.warn("Could not parse request body in webhook middleware")
          return NextResponse.next()
        }
      }

      // Redact sensitive fields
      const redactedBody = { ...body }
      if (redactedBody.password) redactedBody.password = "[REDACTED]"
      if (redactedBody.token) redactedBody.token = "[REDACTED]"

      // Prepare data for the webhook
      const webhookData = {
        timestamp: new Date().toISOString(),
        url: request.url,
        method: request.method,
        path: new URL(request.url).pathname,
        userAgent: request.headers.get("user-agent") || "Unknown",
        ipAddress: request.headers.get("x-forwarded-for") || "Unknown",
        data: redactedBody,
      }

      // Store the webhook data to be sent later
      // We can't make fetch requests directly from middleware in Next.js
      // So we'll just log it for now
      console.log("Webhook data from middleware:", webhookData)

      // In a real implementation, you might want to:
      // 1. Store this data in a database or queue
      // 2. Have a background job process it
      // 3. Or implement a custom header that your API routes can check for
    } catch (error) {
      console.error("Error in webhook middleware:", error)
      // Continue processing the request even if webhook fails
    }
  }

  // Always continue to the next middleware or route handler
  return NextResponse.next()
}
