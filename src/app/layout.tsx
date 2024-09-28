import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/common/header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Self created portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-teritery" lang="en">
      <body className="max-w-[640px] xl:max-w-[1024px] m-auto bg-transparent">
        <Header />
        {children}
      </body>
    </html>
  );
}
