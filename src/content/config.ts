import { defineCollection, z } from "astro:content";

const person = z.object({
  name: z.string(),
  url: z.string().url(),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: person,
    contributors: person.array(),
    tage: z.string().array(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  }),
});

export const collections = { blog };
