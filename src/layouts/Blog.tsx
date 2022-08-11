import getBaseUrl from "@lib/getBaseUrl";
import { TMetadata } from "@schema/metadata";
import Head from "next/head";
import type React from "react";
import { useEffect, useState } from "react";
import Credits from "src/modules/Credits";
import Footer from "src/modules/Footer";
import Header from "src/modules/Header";
import Meta from "src/modules/Meta";
import Newsletter from "src/modules/Newsletter";
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
  return (
    <>
      <Meta
        title={title}
        description={excerpt}
        image={getBaseUrl() + image}
        url={`${getBaseUrl()}/post/${slug}`}
        alt="Reactive Logo"
      />

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
