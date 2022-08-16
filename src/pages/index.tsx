import { getAllPosts } from "../lib/api";
import type { NextPage, GetStaticProps } from "next";
import Page from "src/layouts/Page";
import { TMetadata } from "@schema/metadata";
import Preview from "src/modules/Preview";
import readingTime from "@lib/readingTime";

interface HomeProps {
  posts: (TMetadata & { readingTime: string })[];
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
      posts: getAllPosts().map(({ post: { metadata, content } }) => ({
        ...metadata,
        readingTime: readingTime(content),
      })),
    },
  };
};

export default Home;
