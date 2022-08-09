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
        <meta name="title" content={`${title} - Reactive`} key="title" />
        <meta name="description" content={description} key="description" />

        {/* Open Graph */}
        <meta name="og:title" content={title} key="og:title" />
        <meta
          name="og:description"
          content={description}
          key="og:description"
        />
        <meta
          name="og:image"
          content={`${getBaseUrl()}/static/images/reactive.png`}
          key="og:image"
        />
        <meta
          name="og:image:secure_url"
          content={`${getBaseUrl()}/static/images/reactive.png`}
          key="og:image:secure_url"
        />
        <meta
          property="og:image:type"
          content="image/png"
          key="og:image:type"
        />
        <meta property="og:image:width" content="1920" key="og:image:width" />
        <meta property="og:image:height" content="1080" key="og:image:height" />
        <meta
          property="og:image:alt"
          content="reactive.so logo image"
          key="og:image:alt"
        />
        <meta property="og:site_name" content="reactive" key="og:site_name" />
        <meta property="og:url" content={getBaseUrl()} key="og:url" />

        {/* Twitter */}
        <meta name="twitter:title" content={title} key="twitter:title" />
        <meta
          name="twitter:description"
          content={description}
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content={`${getBaseUrl()}/static/images/reactive.png`}
          key="twitter:image"
        />
        <meta
          property="twitter:domain"
          content={getBaseUrl()}
          key="twitter:domain"
        />
        <meta property="twitter:url" content={getBaseUrl()} key="twitter:url" />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
      </Head>

      <Root>
        <Header />
        <div className="space-y-10">{children}</div>
        <Footer />
      </Root>
    </>
  );
};

export default Page;
