import { allPosts } from "contentlayer/generated";
import dayjs from "dayjs";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Home - Reactive",
};

export default async function HomePage() {
  return (
    <div className="w-full flex flex-col space-y-6">
      {allPosts
        .sort((a, b) =>
          dayjs(a.createdAt).isAfter(dayjs(b.createdAt)) ? -1 : 1,
        )
        .map((p) => (
          <Link key={p.title} href={p.url} className="w-full">
            <div className="flex flex-col space-y-1">
              <h2 className="text-2xl font-serif font-bold">{p.title}</h2>
              <p className="text-sm font-bold text-neutral-500">
                {dayjs(p.createdAt).format("DD/MM/YYYY")}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
