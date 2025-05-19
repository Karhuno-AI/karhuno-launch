/**
 * Webhook utility for development and production
 */

// Use a flag to determine if we should actually send webhook data
// This can be controlled via environment variable
const SEND_WEBHOOKS = process.env.NEXT_PUBLIC_SEND_WEBHOOKS !== "false"

// Use our own API endpoint as the webhook URL instead of the external one
const WEBHOOK_URL = "/api/webhook"

// Типы данных для вебхуков
export interface WebhookLeadData {
  type: string;
  email: string;
  to: string;
  timestamp: string;
  feedbackCall?: boolean; // Опциональное поле для указания готовности пользователя дать обратную связь
  [key: string]: any; // Другие возможные поля
}

/**
 * Sends data to the webhook via our proxy
 * @param data Any data to be sent to the webhook
 * @param options Optional configuration
 */
export async function sendToWebhook(
  data: WebhookLeadData,
  options: {
    eventType?: string
    source?: string
    async?: boolean
  } = {},
) {
  const { eventType = "form_submission", source = "karhuno_website", async = true } = options

  // If webhooks are disabled, just log the data and return
  if (!SEND_WEBHOOKS) {
    console.log("Webhooks disabled, but would have sent:", data);
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

  // Выводим лог о том, что будем отправлять
  console.log("Preparing to send webhook data:", JSON.stringify(payload, null, 2));

  try {
    // If async is true, don't wait for the response
    if (async) {
      // Use a timeout to prevent blocking the main thread
      setTimeout(() => {
        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload),
        }).then(response => {
          if (!response.ok) {
            console.error(`Webhook request failed with status: ${response.status}`);
          } else {
            console.log("Webhook request successful (async)");
          }
          return response.json();
        }).then(data => {
          console.log("Webhook response:", data);
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
          "X-Requested-With": "XMLHttpRequest",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        console.error(`Webhook request failed with status: ${response.status}`);
        throw new Error(`Webhook request failed with status: ${response.status}`)
      }

      const responseData = await response.json();
      console.log("Webhook response:", responseData);
      return { success: true, message: "Webhook request successful", data: responseData }
    }
  } catch (error) {
    // Log the error but don't break the user experience
    console.error("Error sending to webhook:", error)
    return { success: false, error: String(error) }
  }
}
