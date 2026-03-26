// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkUnescapeMath from './src/plugins/remark-unescape-math.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
  base: '/quantum-blog/',
	integrations: [mdx(), sitemap()],
  	markdown: {
		remarkPlugins: [remarkMath, remarkUnescapeMath],
		rehypePlugins: [rehypeKatex],
		shikiConfig: {
			theme: 'github-dark',
		}
	},
});
