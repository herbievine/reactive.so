import { TMetadata } from "@schema/metadata";
import { useTheme } from "next-themes";
import Head from "next/head";
import type React from "react";
import { useEffect, useState } from "react";
import Credits from "src/modules/Credits";
import Footer from "src/modules/Footer";
import Header from "src/modules/Header";
import Share from "src/modules/Share";

interface BlogProps {
  metadata: TMetadata;
  children: React.ReactNode;
}

const Blog: React.FC<BlogProps> = ({ metadata, children }) => {
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
        <title>{metadata.title} - Reactive</title>
      </Head>

      <div className={theme}>
        <div className="w-full min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
          <div className="w-10/12 max-w-2xl mx-auto py-12 space-y-12">
            <Header />
            <div className="space-y-6">
              <h1 className="font-black text-3xl">{metadata.title}</h1>
              <Credits metadata={metadata} />
              {children}
            </div>
            <Share metadata={metadata} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
