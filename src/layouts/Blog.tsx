import getBaseUrl from "@/utils/getBaseUrl";
import { TMetadata } from "@/schema/metadata";
import type React from "react";
import Credits from "@/modules/Information";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import Meta from "@/modules/Meta";
import Share from "@/modules/Share";
import Root from "./Root";

interface BlogProps {
  metadata: TMetadata;
  readingTime: string;
  children: React.ReactNode;
}

const Blog: React.FC<BlogProps> = ({
  metadata: { title, excerpt, image, slug, createdAt },
  readingTime,
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
          <Credits createdAt={createdAt} readingTime={readingTime} />
          {children}
        </div>
        <Share metadata={{ title, excerpt, image, slug, createdAt }} />
        <Footer />
      </Root>
    </>
  );
};

export default Blog;
