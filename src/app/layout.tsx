import React from "react";
import "@/styles/globals.css";
import { EB_Garamond } from "next/font/google";
import { clsx } from "clsx";
import Link from "next/link";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--eb-garamond",
  display: "swap",
});

type RootLayoutProps = React.PropsWithChildren<{}>;

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
      </body>
    </html>
  );
}
