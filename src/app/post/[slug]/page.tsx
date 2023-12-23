import { Feedback } from "@/components/feedback";
import Render from "@/components/render";
import { allPosts } from "contentlayer/generated";
import dayjs from "dayjs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Balancer from "react-wrap-balancer";

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

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata | undefined> {
  if (!params?.slug) {
    return;
  }

  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, createdAt, description, slug } = post;

  return {
    title,
    description,
    ...(post.tags && {
      keywords: post.tags.join(", "),
    }),
    openGraph: {
      title: `${title} - Reactive`,
      description,
      type: "article",
      publishedTime: dayjs(createdAt).toISOString(),
      url: `https://reactive.so/blog/${slug}`,
      images: [
        {
          url: `https://reactive.so/api/og?title=${title}`,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [`https://reactive.so/api/og?title=${title}`],
    },
  };
}

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
            <time dateTime={dayjs(post.createdAt).format("YYYY-MM-DD")}>
              {dayjs(post.createdAt).format("DD/MM/YYYY")}
            </time>
          </p>
          <div className="w-full h-0.5 bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </div>
      <Feedback source={post.slug} />
      <Render code={post.body.code} />
      <Feedback source={post.slug} />
    </div>
  );
}
