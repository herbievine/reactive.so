import * as z from "zod";
import { metadataSchema } from "./metadata";

export const postSchema = z.object({
  content: z.string(),
  metadata: metadataSchema,
});

export type TPost = z.infer<typeof postSchema>;
