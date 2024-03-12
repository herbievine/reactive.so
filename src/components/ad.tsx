"use client";

import Image from "next/image";

export type Props = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export function Ad({ title, description, url, image }: Props) {
  return (
    <div className="not-prose border-2 border-neutral-300 dark:border-neutral-700 rounded-md px-6 py-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col space-y-3"
      >
        <div className="flex items-center justify-between space-x-4 w-full">
          <div className="flex flex-col justify-between items-start space-y-2">
            <span className="text-xs underline text-neutral-500 dark:text-neutral-400">
              Sponsored
            </span>
            <span className="font-bold">{title}</span>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          </div>
          <Image
            src={image}
            alt={title}
            width={200}
            height={100}
            className="rounded-md"
          />
        </div>
      </a>
    </div>
  );
}
