// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://bushdoggo.github.io.',
	base: '/bushdoggo.com',
	integrations: [mdx(), sitemap()],
});
