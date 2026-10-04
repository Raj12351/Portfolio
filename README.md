# Rajat Pal: portfolio & writing

Personal site built with [Astro](https://astro.build). It's static, fast, and free to host.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

## Where to edit things

| What | File |
|---|---|
| Name, tagline, email, socials, freelance links, skills, experience, services | `src/config.ts` |
| Case studies (one Markdown file each) | `src/content/projects/*.md` |
| Blog posts (one Markdown file each) | `src/content/blog/*.md` |
| Colors, fonts, spacing | `src/styles/global.css` |
| Your domain | `astro.config.mjs` (`site`) and `public/robots.txt` |

### Write a new post

Create `src/content/blog/my-post.md`:

```md
---
title: 'My post title'
description: One-sentence summary shown in lists and search results.
date: 2026-10-10
tags: [rag, agents]
draft: false
---

Your content in Markdown...
```

Posts with `draft: true` show up in `npm run dev` but are left out of the live site.

### Add a project

Copy any file in `src/content/projects/`, then edit it. Set `featured: true` to show it on the home page, and use `order` to sort.

### Add your resume

Save a copy of your resume **without your phone number** as `public/resume.pdf`, then set `resumeUrl: '/resume.pdf'` in `src/config.ts`. Resume buttons then appear on the home and About pages.

## Deploy (free) with a custom domain

1. Push this folder to a new GitHub repository.
2. On [Vercel](https://vercel.com), [Netlify](https://netlify.com) or [Cloudflare Pages](https://pages.cloudflare.com), import the repo. Astro is auto-detected: the build command is `npm run build` and the output folder is `dist`.
3. Buy your domain, for example `rajatpal.dev`, then add it under the host's **Domains** settings and follow its DNS instructions.
4. Update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the real domain.

Every `git push` after that redeploys the site automatically.

## Ideas for later

- **"Ask my portfolio" chatbot**: a small RAG assistant over your case studies and posts.
- Open Graph images for nicer link previews on LinkedIn and X.
- A contact form (Formspree or a serverless function) in addition to email.
- A `/uses` page listing your setup and tools, or a `/now` page.
