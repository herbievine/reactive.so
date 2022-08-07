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

const Blog: React.FC<BlogProps> = ({ metadata, children }) => {
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
        <title>{metadata.title} - Reactive</title>
        <meta name="title" content={`${metadata.title} - Reactive`} />
        <meta name="description" content={metadata.excerpt} />
      </Head>

      <Root>
        <Header />
        <div className="space-y-6">
          <h1 className="font-black text-3xl">{metadata.title}</h1>
          <Credits metadata={metadata} />
          {children}
        </div>
        <Share metadata={metadata} />
        <Footer />
      </Root>
    </>
  );
};

export default Blog;
