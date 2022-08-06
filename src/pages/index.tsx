import { getAllPosts, getPost, getSlugs } from "../lib/api";
import type { NextPage, GetStaticProps } from "next";

const Home: NextPage = (props) => {
  return (
    <div>
      <h1 className="text-red-500">hello world</h1>
      {props && <pre>{JSON.stringify(props, null, 2)}</pre>}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

export default Home;
