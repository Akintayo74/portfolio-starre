// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Static, content-driven portfolio. Zero client JS by default —
// interactive bits (menu, scoreboard, reader nav) ship as small islands.
export default defineConfig({
  site: 'https://akintayo.dev',
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
