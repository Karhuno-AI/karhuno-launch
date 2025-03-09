"use server";

import { Resend } from "resend";
import KarhunoAdminEmail from "../../../../emails/getData";
import WelcomeEmail from "../../../../emails/index";
import { render } from "@react-email/render";
import { NextResponse } from "next/server"; // Import NextResponse

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailParams {
  to: string;
  ICP: string;
  moreDetails: string;
  company: string;
  name: string;
}

export async function POST(req: Request) {
  try {
    const body: SendEmailParams = await req.json();


    const userhtml = await render(WelcomeEmail())


    const Adminhtml = await render(
      KarhunoAdminEmail({
        to: body.to,
        ICP: body.ICP,
        moreDetails: body.moreDetails,
        company: body.company,
        name: body.name,
      })
    );
    

    await resend.emails.send({
      from: "Karhuno Team <team@karhuno.com>",
      to: body.to,
      subject:"Thanks For Signing Up",
      html:userhtml,
    })

    const { data, error } = await resend.emails.send({
      from: "ds@karhuno.com",
      to: "dstepkin@gmail.com",
      subject: "The information",
      html: Adminhtml,
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}