import React from "react";
import "@/styles/globals.css";
import { EB_Garamond } from "next/font/google";
import { clsx } from "clsx";
import Link from "next/link";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reactive",
    template: "%s - Reactive",
  },
  description: "A blog about programming concepts and technologies",
  openGraph: {
    title: "Reactive",
    description: "A blog about programming concepts and technologies",
    type: "website",
    url: "https://reactive.so",
    images: [
      {
        url: "https://reactive.so/og.png",
        width: 1200,
        height: 630,
        alt: "Reactive",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Reactive",
    card: "summary_large_image",
  },
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "48x48",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/assets/apple-touch-icon.png",
    },
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 antialiased",
          ebGaramond.variable
        )}
      >
        <div className="w-full mx-auto md:max-w-2xl px-6 py-12 flex flex-col items-center space-y-12">
          <Link href="/" className="w-min text-2xl font-bold font-serif">
            reactive
          </Link>
          <div className="w-full">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
