// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Your domain: used for the sitemap, RSS feed and social previews.
export default defineConfig({
  site: 'https://rajatpal.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
