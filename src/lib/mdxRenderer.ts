import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const mdxRenderer = async (
  content: string
): Promise<MDXRemoteSerializeResult<Record<string, unknown>>> =>
  await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeHighlight,
        [rehypeAutolinkHeadings, { behavior: "append" }],
      ],
    },
  });

export default mdxRenderer;
