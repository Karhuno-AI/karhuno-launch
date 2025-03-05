import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
// import { CookieConsent } from "@/components/cookie-content";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Karhuno AI",
  description: "This karhuno AI dashboard",
  icons: [
    { rel: "icon", type: "image/png", sizes: "48x48", url: "/images/favicon.ico" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <CookieConsent /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
