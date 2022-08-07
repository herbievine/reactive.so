import { getAllPosts, getPost, getSlugs } from "../lib/api";
import type { NextPage, GetStaticProps } from "next";
import Page from "src/layouts/Page";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { TMetadata } from "@schema/metadata";
import Preview from "src/modules/Preview";

interface HomeProps {
  posts: TMetadata[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Page title="Home">
      {posts.map((post, i) => (
        <Preview key={i} metadata={post} />
      ))}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts().map(({ post: { metadata } }) => metadata),
    },
  };
};

export default Home;
