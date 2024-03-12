"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";
import { Ad } from "./ad";

type RenderProps = {
  code: string;
};

export default function Render({ code }: RenderProps) {
  const MDX = useMDXComponent(code);

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <MDX
        components={{
          Ad,
        }}
      />
    </article>
  );
}
