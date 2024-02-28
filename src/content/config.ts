import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  date: z.date(),
});

const blogContent = defineCollection({
  type: "content",
  schema: blogSchema,
});

export type BlogSchema = z.infer<typeof blogSchema>;

export const collection = {
  blog: blogContent,
};
