// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Your domain: used for the sitemap, RSS feed and social previews.
export default defineConfig({
  site: 'https://rajatpal.com',
  // Concept demos are noindex, so keep them out of the sitemap too.
  integrations: [sitemap({ filter: (page) => !page.includes('/websites/demos/') })],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
