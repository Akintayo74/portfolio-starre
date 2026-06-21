import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Typed case-study collection. The Earthworks study is ported as a
// dedicated .astro page in Phase 1; Phase 3 migrates case-study bodies
// into MDX entries against this schema (title, metrics, stack, etc.).
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),
    summary: z.string(),
    role: z.string(),
    focus: z.string(),
    year: z.string(),
    stack: z.string(),
    url: z.string(),
    /** Lower sorts first on the work index. */
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
