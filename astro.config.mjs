// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

export default defineConfig({
  site: "https://onend.studio",

  experimental: {
    svg: true,
  },

  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
