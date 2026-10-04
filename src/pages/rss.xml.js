import rss from '@astrojs/rss';
import { SITE } from '../config';
import { getPosts } from '../lib/content';

export async function GET(context) {
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  return rss({
    title: `${SITE.name} | Writing`,
    description: 'Notes on RAG, AI agents, LLM evaluation, and building GenAI for production.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
