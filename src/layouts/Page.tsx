import getBaseUrl from "@lib/getBaseUrl";
import Head from "next/head";
import type React from "react";
import { useEffect, useState } from "react";
import Footer from "src/modules/Footer";
import Header from "src/modules/Header";
import Root from "./Root";

interface PageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{title} - Reactive</title>
        <meta name="title" content={`${title} - Reactive`} />
        <meta name="description" content={description} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta
          name="og:image"
          content={`${getBaseUrl()}/static/images/reactive.png`}
        />
        <meta property="og:url" content={getBaseUrl()}></meta>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Root>
        <Header />
        <div className="space-y-6">{children}</div>
        <Footer />
      </Root>
    </>
  );
};

export default Page;
