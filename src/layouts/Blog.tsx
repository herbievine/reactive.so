import getBaseUrl from "@lib/getBaseUrl";
import { TMetadata } from "@schema/metadata";
import Head from "next/head";
import type React from "react";
import { useEffect, useState } from "react";
import Credits from "src/modules/Credits";
import Footer from "src/modules/Footer";
import Header from "src/modules/Header";
import Share from "src/modules/Share";
import Root from "./Root";

interface BlogProps {
  metadata: TMetadata;
  children: React.ReactNode;
}

const Blog: React.FC<BlogProps> = ({
  metadata: { title, excerpt, image, slug, ...matadataRest },
  children,
}) => {
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
        <meta name="description" content={excerpt} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={excerpt} />
        <meta name="og:image" content={getBaseUrl() + image} />
        <meta property="og:url" content={`${getBaseUrl()}/post/${slug}`}></meta>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Root>
        <Header />
        <div className="space-y-6">
          <h1 className="font-black text-3xl">{title}</h1>
          <Credits
            metadata={{ title, excerpt, image, slug, ...matadataRest }}
          />
          {children}
        </div>
        <Share metadata={{ title, excerpt, image, slug, ...matadataRest }} />
        <Footer />
      </Root>
    </>
  );
};

export default Blog;
