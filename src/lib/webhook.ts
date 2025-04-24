/**
 * Webhook utility for development and production
 */

// Use a flag to determine if we should actually send webhook data
// This can be controlled via environment variable
const SEND_WEBHOOKS = process.env.NEXT_PUBLIC_SEND_WEBHOOKS !== "false"

// Use our own API endpoint as the webhook URL instead of the external one
const WEBHOOK_URL = "/api/webhook"

/**
 * Sends data to the webhook via our proxy
 * @param data Any data to be sent to the webhook
 * @param options Optional configuration
 */
export async function sendToWebhook(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  options: {
    eventType?: string
    source?: string
    async?: boolean
  } = {},
) {
  const { eventType = "form_submission", source = "karhuno_website", async = true } = options

  // If webhooks are disabled, just log the data and return
  if (!SEND_WEBHOOKS) {
    return { success: true, message: "Webhook disabled" }
  }

  // Prepare the payload with metadata
  const payload = {
    event: eventType,
    source,
    timestamp: new Date().toISOString(),
    data,
    url: typeof window !== "undefined" ? window.location.href : null,
  }

  try {
    // If async is true, don't wait for the response
    if (async) {
      // Use a timeout to prevent blocking the main thread
      setTimeout(() => {
        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }).catch((error) => {
          console.error("Error sending to webhook (async):", error)
        })
      }, 0)

      return { success: true, message: "Webhook request initiated" }
    } else {
      // If async is false, wait for the response
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Webhook request failed with status: ${response.status}`)
      }

      return { success: true, message: "Webhook request successful" }
    }
  } catch (error) {
    // Log the error but don't break the user experience
    console.error("Error sending to webhook:", error)
    return { success: false, error: String(error) }
  }
}
