"use server";

import { Resend } from "resend";
import WelcomeEmail from "../../../../emails/index";
import KarhunoAdminEmail from "../../../../emails/getData";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailParams {
  type: "user" | "admin"; // Determine if the email is for user signup or admin notification
  to: string;
  ICP?: string;
  moreDetails?: string;
  company?: string;
  name?: string;
}

export async function POST(req: Request) {
  try {
    const body: SendEmailParams = await req.json();

    if (!body.to || !body.type) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    let html;
    let subject;
    let recipient = body.to; // Default recipient

    if (body.type === "user") {
      // Render Welcome Email
      html = await render(WelcomeEmail());
      subject = "Thanks For Signing Up";
    } else if (body.type === "admin") {
      // Render Admin Notification Email
      html = await render(
        KarhunoAdminEmail({
          to: "",
          ICP: "",
          moreDetails: "",
          company: "",
          name: "",
        })
      );
      subject = "The Info";
      recipient = "dstepkin@gmail.com"; // Fixed admin email
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid email type." },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from:
        body.type === "user"
          ? "Karhuno Team <team@karhuno.com>"
          : "ds@karhuno.com",
      to: recipient,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
