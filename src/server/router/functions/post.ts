import { inferQueryInput, inferQueryOutput } from "@/utils/trpc";
import { z } from "zod";
import { createRouter } from "../context";

export type PostFindOneInput = inferQueryInput<"post.findOne">;
export type PostFindOneOutput = inferQueryOutput<"post.findOne">;
export type PostFindManyInput = inferQueryInput<"post.findMany">;
export type PostFindManyOutput = inferQueryOutput<"post.findMany">;

const postRouter = () =>
  createRouter()
    .query("findOne", {
      input: z.object({
        slug: z.string(),
      }),
      async resolve({ input, ctx }) {
        const post = ctx.prisma.post.findUnique({
          where: {
            slug: input.slug,
          },
        });

        return post;
      },
    })
    .query("findMany", {
      async resolve({ ctx }) {
        const posts = ctx.prisma.post.findMany({
          where: {
            published: true,
          },
          select: {
            title: true,
            slug: true,
            excerpt: true,
            readTime: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 10,
        });

        return posts;
      },
    });

export default postRouter;
