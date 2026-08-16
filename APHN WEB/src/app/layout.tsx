import React from "react";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APHN - Association of Private Hospital and Nursing Home West Bengal",
  description: "Official web portal of the Association of Private Hospital and Nursing Home (APHN) West Bengal. Facilitating private healthcare collaboration, patient safety, and regulatory compliance.",
  keywords: "APHN, Association of Private Hospital and Nursing Home, West Bengal nursing homes, Swasthya Sathi, Clinical Establishment compliance, patient safety West Bengal",
  authors: [{ name: "APHN State Committee" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
  }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-bg text-text min-h-screen flex flex-col pt-[72px]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
