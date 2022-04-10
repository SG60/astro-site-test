import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({ config: { applyAstroPreset: false } }),
    turbolinks(),
  ],
});
