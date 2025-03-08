"use server"

import { Resend } from "resend";
import WelcomeEmail from "../../../../emails/index";
import KarhunoAdminEmail from "../../../../emails/getData";
import { renderAsync } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY)

export interface SendEmailParams {
  to: string
  ICP: string
  moreDetails: string
  company: string
  name: string
}


export async function sendEmail({ to }: SendEmailParams) {
  try {
    // Render the React Email component to HTML
    const html = await renderAsync(WelcomeEmail())

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "Karhuno Team <team@karhuno.com>",
      to,
      subject:"Thanks For Signing Up",
      html,
    })
    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}



export async function sendAdminEmail({to,ICP,moreDetails,company,name}: SendEmailParams) {
  try {
    // Render the React Email component to HTML
    const html = await renderAsync(KarhunoAdminEmail({to,ICP,moreDetails,company,name}))

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "ds@karhuno.com",
      to: "dstepkin@gmail.com",
      subject:"The Info",
      html,
    })
    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

