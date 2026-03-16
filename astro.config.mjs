import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), icon(), sitemap()],
  site: "https://fellcode.github.io/sebAstro",
  base: "/sebAstro/",
  trailingSlash: "always"
});
