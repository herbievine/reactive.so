import { TMetadata } from "@schema/metadata";
import { useTheme } from "next-themes";
import Head from "next/head";
import type React from "react";
import { useEffect, useState } from "react";
import Credits from "src/modules/Credits";
import Footer from "src/modules/Footer";
import Header from "src/modules/Header";
import Share from "src/modules/Share";
import Root from "./Root";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme: theme } = useTheme();

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
