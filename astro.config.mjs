// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Static, content-driven portfolio. Zero client JS by default —
// interactive bits (menu, scoreboard, reader nav) ship as small islands.
export default defineConfig({
  site: 'https://akintayo.dev',
  integrations: [mdx()],
  build: {
    inlineStylesheets: 'auto',
  },
});
