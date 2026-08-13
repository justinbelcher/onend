import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const text = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/text" }),
  schema: z.object({
    byline: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      name: z.string(),
      year: z.number(),
      materials: z.string(),
      finish: z.string().optional(),
      client: z.string().optional(),
      cover: image(),
      photos: z.array(image()),
    }),
});

export const collections = { projects, text };
