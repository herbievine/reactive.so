import React from 'react'
import { getAllPosts, getPost as getOnePost } from "@/lib/api";
import Blog from '@/layouts/Blog';
import { MDXRemote } from 'next-mdx-remote';
import { notFound } from 'next/navigation';
import mdxRenderer from '@/lib/mdxRenderer';
import Link from '@/components/Link';
import Image from 'next/image';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function getPost(slug = '') {
  const post = getOnePost(slug);

  if (!post) {
    notFound()
  }

	return {
    post: post.post,
    content: await mdxRenderer(post.post.content ?? ''),
  }
}

type PostPageProps = React.PropsWithChildren<{
  params?: {
    slug?: string;
  };
}>

export default async function PostPage ({params}: PostPageProps) {
	const { post, content } = await getPost(params?.slug)

  if (!post) {
    notFound()
  }

	return (
    <Blog metadata={post.metadata} readingTime={''}>
      <article className="prose dark:prose-invert">
        <MDXRemote
          {...content}
          components={{
            Link,
            Image: ({ src, alt, width = 1200, height = 630 }) => (
              <Image src={src} alt={alt} width={width} height={height} />
            ),
            a: ({ href, children }) => (
              <a href={href} target="_BLANK" rel="noreferrer">
                {children}
              </a>
            ),
          }}
        />
      </article>
    </Blog>
  );
}
