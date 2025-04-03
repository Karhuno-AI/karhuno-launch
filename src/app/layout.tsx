import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-content";
import Script from "next/script";
import {
  ClerkProvider,
} from '@clerk/nextjs'


const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karhuno - Al Insights for Sales",
  description:
    "Karhuno scans news and social media to identify signals indicating that a potential client will soon be interested in purchasing certain products or services.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      url: "/images/favicon.ico",
    },
  ],
};

const GA_TRACKING_ID = "G-VQ94784XQM";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
        </head>
        <body className={`${montserrat.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <CookieConsent />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
