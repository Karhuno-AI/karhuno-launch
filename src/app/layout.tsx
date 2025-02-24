import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "300",
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
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
