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
    <div className="not-prose border-2 border-neutral-300 dark:border-neutral-700 rounded-md px-4 py-3">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-x-4 sm:space-y-0 w-full">
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
            className="rounded-md w-full max-w-xs sm:w-48"
          />
        </div>
      </a>
    </div>
  );
}
