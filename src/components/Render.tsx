"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";
import Link from "./Link";
import Image from "./Image";

type RenderProps = React.PropsWithChildren<{
  code: string;
}>;

export default function Render({ code }: RenderProps) {
  const MDX = useMDXComponent(code);

  return (
    <div className="prose prose-neutral dark:prose-invert">
      <MDX
        components={{
          Link,
          Image: ({ src, alt, width = 1200, height = 630 }) => (
            <Image src={src} alt={alt} width={width} height={height} />
          ),
        }}
      />
    </div>
  );
}
