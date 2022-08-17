// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import postRouter from "./functions/post";
import * as trpc from "@trpc/server";
import editRouter from "./functions/edit";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("post.", postRouter())
  .middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
    }

    return next({
      ctx: {
        ...ctx,
        // infers that `session` is non-nullable to downstream resolvers
        session: { ...ctx.session, user: ctx.session.user },
      },
    });
  })
  .merge("edit.", editRouter());

// export type definition of API
export type AppRouter = typeof appRouter;
