import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VDEX | Degen Playground",
  description: "VDEX is the first omnichain perpDEX with no slippage and sustainable Bitcoin Yield",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
