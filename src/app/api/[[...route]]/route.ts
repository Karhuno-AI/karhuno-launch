import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextResponse } from "next/server";

// Log environment variables for debugging (redacted for security)
console.log("AWS_ACCESS_KEY exists:", !!process.env.AWS_ACCESS_KEY);
console.log("AWS_ACCESS_KEY_ID exists:", !!process.env.AWS_ACCESS_KEY_ID);
console.log("AWS_REGION:", process.env.AWS_REGION);
console.log("SES_FROM_EMAIL:", process.env.SES_FROM_EMAIL);
console.log("SES_TO_EMAIL:", process.env.SES_TO_EMAIL);

// Update the SESClient to use the correct environment variable names
const sesClient = new SESClient({
  region: process.env.AWS_REGION || "eu-north-1",
  credentials: {
    // Use AWS_ACCESS_KEY instead of AWS_ACCESS_KEY_ID to match your .env
    accessKeyId: process.env.AWS_ACCESS_KEY || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function POST(request: Request) {
  try {
    const { to, subject, message } = await request.json();

    // Use SES_TO_EMAIL as fallback if 'to' is not provided
    const recipientEmail = to || process.env.SES_TO_EMAIL;

    // Validate inputs
    if (!recipientEmail) {
      return NextResponse.json({ error: "Recipient email is required" }, { status: 400 });
    }
    
    if (!subject) {
      return NextResponse.json({ error: "Subject is required" }, { status: 400 });
    }
    
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipientEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Log the email addresses being used
    console.log("Sending from:", process.env.SES_FROM_EMAIL);
    console.log("Sending to:", recipientEmail);

    const emailParams = {
      Destination: { ToAddresses: [recipientEmail] },
      Message: {
        Body: { 
          Text: { Data: message },
          Html: { Data: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</div>` }
        },
        Subject: { Data: subject },
      },
      Source: process.env.SES_FROM_EMAIL || "",
    };

    await sesClient.send(new SendEmailCommand(emailParams));

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("SES Error:", error);
    
    // Provide more specific error messages based on error type
    if (error.name === "MessageRejected") {
      return NextResponse.json({ 
        error: `Email was rejected: ${error.message}. Please verify both sender and recipient emails in the eu-north-1 region.` 
      }, { status: 400 });
    }
    
    if (error.name === "InvalidParameterException") {
      return NextResponse.json({ 
        error: "Invalid parameters provided to AWS SES." 
      }, { status: 400 });
    }
    
    if (error.name === "ConfigurationSetDoesNotExistException") {
      return NextResponse.json({ 
        error: "AWS SES configuration issue. Please check your AWS SES setup." 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      error: `Failed to send email: ${error.message || "Unknown error"}` 
    }, { status: 500 });
  }
}
