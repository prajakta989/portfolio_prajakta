import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prajakta Naik — Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js and Tailwind CSS. Building modern, responsive and accessible web experiences.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Prajakta Naik" }],
  openGraph: {
    title: "Prajakta Naik — Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js and Tailwind CSS. Building modern, responsive and accessible web experiences.",
    url: "https://prajaktanaik.vercel.app",
    siteName: "Prajakta Naik",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajakta Naik — Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js and Tailwind CSS. Building modern, responsive and accessible web experiences.",
  },
  metadataBase: new URL("https://prajaktanaik.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark">
        <main className="px-6 md:px-12 lg:px-28 py-6">{children}</main>
      </body>
    </html>
  );
}
