"use server";

import { Resend } from "resend";
import KarhunoAdminEmail from "../../../../emails/getData";
import WelcomeEmail from "../../../../emails/index";
import { render } from "@react-email/render";
import { NextResponse } from "next/server"; // Import NextResponse

// Проверяем наличие ключа и создаем экземпляр Resend только если ключ есть
// Иначе используем заглушку для сборки
const RESEND_API_KEY = process.env.RESEND_API_KEY || 'dummy_key_for_build';
const resend = new Resend(RESEND_API_KEY);

export interface SendEmailParams {
  to: string;
}

export async function POST(req: Request) {
  try {
    // Проверяем, что API-ключ настоящий, а не заглушка
    if (RESEND_API_KEY === 'dummy_key_for_build') {
      return NextResponse.json(
        { success: false, error: "Email API key is not configured." },
        { status: 503 }
      );
    }
    
    const body: SendEmailParams = await req.json();

    const userhtml = await render(WelcomeEmail())

    const Adminhtml = await render(
      KarhunoAdminEmail({
        to: body.to,
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