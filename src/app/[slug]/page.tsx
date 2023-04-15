import React from "react";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import Render from "@/components/Render";
import Balancer from "react-wrap-balancer";
import dayjs from "dayjs";

export async function generateStaticParams() {
  return allPosts.map(({ slug }) => ({
    slug,
  }));
}

type PostPageProps = {
  params?: {
    slug?: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(({ slug }) => slug === params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col space-y-6">
      <div className="w-full flex flex-col space-y-2">
        <h1 className="text-3xl font-bold font-serif">
          <Balancer>{post.title}</Balancer>
        </h1>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-bold text-neutral-500">
            <time dateTime={dayjs(post.date).format("YYYY-MM-DD")}>
              {dayjs(post.date).format("DD/MM/YYYY")}
            </time>
          </p>
          <div className="w-full h-0.5 bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </div>
      <Render code={post.body.code} />
    </div>
  );
}
