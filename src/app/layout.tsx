import type { Metadata } from "next";
import { Lexend, Syne } from "next/font/google";
import "./globals.css";
import { ParticleEffect } from "@/components/effects/particleEffect";



const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"]
})

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Raone Ferreira",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
