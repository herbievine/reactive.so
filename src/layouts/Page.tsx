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
