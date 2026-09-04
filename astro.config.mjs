import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://fellcode.github.io/sebAstro",
  base: "/sebAstro/",
  trailingSlash: "always"
});
