// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  site: "https://onend.studio",

  experimental: {
    svg: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap(),
  ],
});
