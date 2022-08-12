import path from "path";
import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import { postSchema, TPost } from "@schema/post";
import dayjs from "dayjs";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/**/*.mdx`);

  return paths.map((file) => path.basename(file, ".mdx"));
};

export const getPost = (
  slug: string
): {
  slug: string;
  post: TPost;
} => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath, "utf8");
  const { content, data: metadata } = matter(source);
  const postData = postSchema.parse({ content, metadata });

  return {
    slug,
    post: postData,
  };
};

export const getAllPosts = () => {
  return getSlugs()
    .map((slug) => getPost(slug))
    .sort(({ post: { metadata: a } }, { post: { metadata: b } }) =>
      dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1
    )
    .filter(({ post: { metadata } }) =>
      dayjs(metadata.createdAt).isBefore(dayjs())
    );
};
