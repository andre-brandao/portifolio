import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// A field written once per locale. The default locale is required so every
// entry has something to fall back on (see useTranslations in src/i18n.ts);
// the rest are optional. Adding a locale means adding a key here.
const multilingual = () => z.object({ en: z.string(), pt: z.string().optional() });

// One folder per project holding its images plus one file per locale:
// projects/<slug>/en.mdx, projects/<slug>/pt.mdx. Entry id = "<slug>/<lang>".
const projects = defineCollection({
  loader: glob({ pattern: '*/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image().optional(),
      // screenshots the hover preview in project lists cycles through, after the cover
      previews: z.array(image()).optional(),
      tags: z.array(z.string()),
      // optional repository, shown as an icon button in the post header
      github: z.url().optional(),
      // true = archived: kept in the repo, left out of the site
      draft: z.boolean().default(false),
    }),
});

// One folder per badge: certifications/<slug>/index.yaml plus its image. Titles are multilingual
// so a single entry serves every locale.
const certifications = defineCollection({
  loader: glob({ pattern: '*/index.yaml', base: './src/content/certifications' }),
  schema: ({ image }) =>
    z.object({
      title: multilingual(),
      issuer: z.string(),
      image: image(),
      url: z.url(),
      order: z.number().default(0),
  }),
});

// One folder per company: work/<company>/index.yaml plus its local logo.
const work = defineCollection({
  loader: glob({ pattern: '*/index.yaml', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      role: multilingual(),
      period: multilingual(),
      logo: image().optional(),
      mark: z.string().optional(),
      url: z.url().optional(),
      projects: z
        .array(
          z.object({
            label: multilingual(),
            slug: z.string(),
          }),
        )
        .optional(),
      order: z.number().default(0),
    }).refine(({ logo, mark }) => logo || mark, {
      message: 'Each company needs either a logo or a text mark',
    }),
});

export const collections = { projects, certifications, work };
