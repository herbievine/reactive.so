import getBaseUrl from "@lib/getBaseUrl";
import Head from "next/head";
import type React from "react";
import { useEffect, useState } from "react";
import Footer from "src/modules/Footer";
import Header from "src/modules/Header";
import Meta from "src/modules/Meta";
import Root from "./Root";

interface PageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  return (
    <>
      <Meta
        title={title}
        description={description}
        image={`${getBaseUrl()}/static/images/reactive.png`}
      />

      <Root>
        <Header />
        <div className="space-y-10">{children}</div>
        <Footer />
      </Root>
    </>
  );
};

export default Page;
