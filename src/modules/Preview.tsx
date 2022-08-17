import { PostFindManyOutput } from "@/server/router/functions/post";
import dayjs from "dayjs";
import Link from "next/link";
import type React from "react";

interface PreviewProps {
  post: PostFindManyOutput[number];
}

const Preview: React.FC<PreviewProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="w-full flex flex-col cursor-pointer space-y-1">
        <h3 className="text-2xl font-black">{post.title}</h3>
        <span className="text-xs font-extrabold text-gray-500">
          {post.readTime} min read
          {" • "}
          <time dateTime={post.createdAt.toISOString()}>
            {dayjs().to(post.createdAt)}
          </time>
        </span>
        <p className="font-extrabold">{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default Preview;
