import { useTheme } from "next-themes";
import Head from "next/head";
import type React from "react";
import { useEffect, useState } from "react";
import Moon from "src/assets/Moon";
import Star from "src/assets/Star";

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme: theme, setTheme } = useTheme();

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

      <div className={theme}>
        <div className="w-full min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
          <div className="w-10/12 max-w-2xl mx-auto">
            <div className="py-12 flex justify-between items-center">
              <h2 className="font-black text-xl text-indigo-500 dark:text-indigo-400">
                reactive
              </h2>
              <button
                className="p-2 rounded-lg border-2 border-indigo-500 dark:border-indigo-400 bg-gray-200 dark:bg-gray-800"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Moon
                    width={18}
                    className="fill-indigo-500 dark:fill-indigo-400"
                  />
                ) : (
                  <Star
                    width={18}
                    className="fill-indigo-500 dark:fill-indigo-400"
                  />
                )}
              </button>
            </div>
            <div className="space-y-6">
              <h1 className="font-black text-3xl">{title}</h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
