import React from 'react'
import { getAllPosts } from "@/lib/api";
import Page from "src/layouts/Page";
import Preview from "src/modules/Preview";
import readingTime from "@/lib/readingTime";

export async function getPosts() {
	return getAllPosts().map(({ post: { metadata, content } }) => ({
		...metadata,
		readingTime: readingTime(content),
	}))
}

type HomePageProps = React.PropsWithChildren<{}>

export default async function HomePage ({}: HomePageProps) {
	const posts = await getPosts()

	return (
    <Page
      title="Home"
      description="Reactive is a small blog about the web. Made by Herbie Vine."
    >
      {posts?.map((post, i) => (
        <Preview key={i} metadata={post} />
      ))}
    </Page>
  );
}
