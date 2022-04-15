import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import astroImagePlugin from "astro-imagetools/plugin";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-test.samgreening.com/",
  integrations: [
    svelte(),
    tailwind({
      config: {
        applyAstroPreset: false,
      },
    }),
    sitemap(),
  ],
  vite: {
    plugins: [astroImagePlugin],
  },
});
