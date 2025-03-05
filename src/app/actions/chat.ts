"use server"

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
})

export async function sendChatMessage(formData: FormData) {
  const message = formData.get("message") as string
  const email = formData.get("email") as string

  if (!message) {
    return { error: "Message is required" }
  }

  try {
    // Send notification email to admin
    const emailParams = {
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL || "team@karhuno.com"],
      },
      Message: {
        Body: {
          Text: {
            Data: `New chat message from ${email || "Anonymous User"}:\n\n${message}`,
          },
          Html: {
            Data: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>New Chat Message</h2>
                <p><strong>From:</strong> ${email || "Anonymous User"}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br/>")}</p>
              </div>
            `,
          },
        },
        Subject: { Data: "New Chat Message from Website" },
      },
      Source: process.env.SES_FROM_EMAIL || "",
    }

    await sesClient.send(new SendEmailCommand(emailParams))
    return { success: true }
  } catch (error: unknown) {
    console.error("Chat message error:", error)
    return {
      error: "Failed to send message. Please try again later.",
    }
  }
}

