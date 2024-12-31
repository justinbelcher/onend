import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const text = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/text" }),
  schema: z.object({
    byline: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    isDraft: z.boolean(),
    name: z.string(),
    year: z.number(),
    materials: z.string(),
    finish: z.string().optional(),
    client: z.string().optional(),
    photos: z.array(z.string()),
  }),
});

export const collections = { projects, text };
