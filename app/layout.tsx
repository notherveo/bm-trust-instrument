import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "TRUST INSTRUMENT ADVISORY",
  description:
    "A mid-size **CPA & advisory firm** (tax, outsourced CFO, audit, wealth). The feeling: clarity is the product.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
