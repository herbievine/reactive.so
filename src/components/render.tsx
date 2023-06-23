"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

type RenderProps = {
  code: string;
};

export default function Render({ code }: RenderProps) {
  const MDX = useMDXComponent(code);

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <MDX />
    </article>
  );
}
