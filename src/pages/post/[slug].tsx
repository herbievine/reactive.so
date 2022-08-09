import { getAllPosts, getPost } from "@lib/api";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Blog from "src/layouts/Blog";
import { TMetadata } from "@schema/metadata";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import Image from "next/future/image";
import Link from "@components/Link";

interface PostProps {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
  metadata: TMetadata;
}

const Post: NextPage<PostProps> = ({ content, metadata }) => {
  return (
    <Blog metadata={metadata}>
      <article className="prose dark:prose-invert">
        <MDXRemote {...content} components={{ Link, Image }} />
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

  const {
    post: { content, metadata },
  } = getPost(slug);

  if (!content || !metadata) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      content: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            rehypeHighlight,
            [rehypeAutolinkHeadings, { behavior: "append" }],
          ],
        },
      }),
      metadata,
    },
  };
};

export default Post;
