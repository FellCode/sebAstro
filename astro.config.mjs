import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://FellCode.github.io/sebAstro",
  outDir: "./dist",
  base: "/sebAstro/"
});