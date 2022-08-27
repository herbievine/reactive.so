import { getAllPosts, getPost } from "@lib/api";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Blog from "src/layouts/Blog";
import { TMetadata } from "@schema/metadata";
import Image from "next/future/image";
import Link from "@components/Link";
import mdxRenderer from "@lib/mdxRenderer";
import readingTime from "@lib/readingTime";

interface PostProps {
  content: MDXRemoteSerializeResult;
  metadata: TMetadata;
  readingTime: string;
}

const Post: NextPage<PostProps> = ({ content, metadata, readingTime }) => {
  return (
    <Blog metadata={metadata} readingTime={readingTime}>
      <article className="prose dark:prose-invert">
        <MDXRemote
          {...content}
          components={{
            Link,
            Image: ({ src, alt, width = 1200, height = 630 }) => (
              <Image src={src} alt={alt} width={width} height={height} />
            ),
            a: ({ href, children }) => (
              <a href={href} target="_BLANK" rel="noreferrer">
                {children}
              </a>
            ),
          }}
        />
      </article>
    </Blog>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts();

  return {
    paths: paths.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug ?? "") as string;

  const postPayload = getPost(slug);

  if (!postPayload) {
    return {
      notFound: true,
    };
  }

  const {
    post: { content, metadata },
  } = postPayload;

  return {
    props: {
      content: await mdxRenderer(content),
      metadata,
      readingTime: readingTime(content),
    },
  };
};

export default Post;
