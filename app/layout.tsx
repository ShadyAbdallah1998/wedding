import type { Metadata } from "next";
import { Aref_Ruqaa_Ink, Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
});

const signatureFont = Aref_Ruqaa_Ink({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "دعوة زفاف شادي و نورهان",
  description: "دعوة زفاف شادي عبدالله و نورهان مومن.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${signatureFont.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
