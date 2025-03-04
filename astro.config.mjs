// @ts-check
import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://betonblock.lv',
  build: {
    assets: 'assets'
  },
  integrations: [tailwind()],
  vite: {
    build: {
      assetsDir: 'assets'
    }
  }
});