import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/Header";
import React from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loadile",
  description: "File hosting service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
