import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// One folder per locale (en/, pt/), one index.mdx per project.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image().optional(),
      tags: z.array(z.string()),
      // true = archived: kept in the repo, left out of the site
      draft: z.boolean().default(false),
    }),
});

// One YAML file per badge, image stored next to it. Titles are multilingual
// so a single entry serves every locale.
const certifications = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/certifications' }),
  schema: ({ image }) =>
    z.object({
      title: z.object({ en: z.string(), pt: z.string().optional() }),
      issuer: z.string(),
      image: image(),
      url: z.url(),
      order: z.number().default(0),
    }),
});

export const collections = { projects, certifications };
