import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import turbolinks from "@astrojs/turbolinks";
import astroImagePlugin from "astro-imagetools/plugin";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      config: {
        applyAstroPreset: false,
      },
    }),
    turbolinks(),
    sitemap(),
  ],
  vite: {
    plugins: [astroImagePlugin],
  },
});
