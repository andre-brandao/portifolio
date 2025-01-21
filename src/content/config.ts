import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image()
        // .refine((img) => img.width >= 500, {
        //   message: "cover must be at least 500px wide",
        // })
        .optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = { blog };
