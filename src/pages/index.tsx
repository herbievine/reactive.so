import { getAllPosts } from "../lib/api";
import type { NextPage, GetStaticProps } from "next";
import Page from "src/layouts/Page";
import { TMetadata } from "@schema/metadata";
import Preview from "src/modules/Preview";

interface HomeProps {
  posts: TMetadata[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Page
      title="Home"
      description="Reactive is a small blog about the web. Made by Herbie Vine."
    >
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
