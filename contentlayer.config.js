import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from "remark-gfm";


export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
		slug: {
			type: 'string',
			resolve: (post) => post._raw.flattenedPath,
		}
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
	mdx: {
		rehypePlugins: [
			rehypeSlug,
			[rehypeAutolinkHeadings, { behavior: "append" }],
			[rehypePrettyCode, {
				theme: 'one-dark-pro',
				onVisitLine(node) {
					if (node.children.length === 0) {
						node.children = [{type: 'text', value: ' '}];
					}
				},
				onVisitHighlightedLine(node) {
					node.properties.className.push('highlighted');
				},
				onVisitHighlightedWord(node) {
					node.properties.className = ['word'];
				},
			}]
		],
		remarkPlugins: [remarkGfm],
	},
})