import { getAllPosts, getPost } from "@lib/api";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import type React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Page from "src/layouts/Page";
import { TMetadata } from "@schema/metadata";
import Credits from "src/modules/Credits";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface PostProps {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
  metadata: TMetadata;
}

const Post: NextPage<PostProps> = ({ content, metadata }) => {
  return (
    <Page title={metadata.title}>
      <Credits metadata={metadata} />
      <article className="prose dark:prose-invert">
        <MDXRemote {...content} />
      </article>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts();

  return {
    paths: paths.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug ?? "") as string;

  const {
    post: { content, metadata },
  } = getPost(slug);

  return {
    props: {
      content: await serialize(content, {
        mdxOptions: {
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
