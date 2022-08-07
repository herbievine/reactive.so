import { TMetadata } from "@schema/metadata";
import dayjs from "dayjs";
import Link from "next/link";
import type React from "react";

interface PreviewProps {
  metadata: TMetadata;
}

const Preview: React.FC<PreviewProps> = ({ metadata }) => {
  return (
    <Link href={`/post/${metadata.slug}`}>
      <div className="w-full flex flex-col cursor-pointer space-y-1">
        <h3 className="text-2xl font-black">{metadata.title}</h3>
        <span className="text-xs font-extrabold text-gray-500">
          {metadata.readingTime}
          {" • "}
          <time dateTime={metadata.createdAt}>
            {dayjs().to(metadata.createdAt)}
          </time>
        </span>
        <p className="font-extrabold">{metadata.excerpt}</p>
      </div>
    </Link>
  );
};

export default Preview;
