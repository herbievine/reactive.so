"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";

type RenderProps = React.PropsWithChildren<{
  code: string;
}>;

export default function Render({ code }: RenderProps) {
  const MDX = useMDXComponent(code);

  return (
    <div className="prose prose-neutral dark:prose-invert">
      <MDX />
    </div>
  );
}
