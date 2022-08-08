import * as z from "zod";

export const metadataSchema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string(),
  readingTime: z.string(),
  excerpt: z.string(),
  createdAt: z.string(),
});

export type TMetadata = z.infer<typeof metadataSchema>;
