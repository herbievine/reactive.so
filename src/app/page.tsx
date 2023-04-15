import React from "react";
import { allPosts } from "contentlayer/generated";
import dayjs from "dayjs";
import Link from "next/link";

async function getPosts() {
  return allPosts.sort((a, b) =>
    dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1
  );
}

type HomePageProps = {};

export default async function HomePage({}: HomePageProps) {
  const posts = await getPosts();

  return (
    <div className="w-full flex flex-col space-y-6">
      {posts.map((p) => (
        <Link key={p.title} href={p.url} className="w-full">
          <div className="flex flex-col space-y-1">
            <h2 className="text-2xl font-serif font-bold">{p.title}</h2>
            <p className="text-sm font-bold text-gray-500">
              {dayjs(p.date).format("DD/MM/YYYY")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
