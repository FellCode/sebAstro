import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://fellcode.github.io/sebAstro",
  base: "/sebAstro/",
  trailingSlash: "always"
});