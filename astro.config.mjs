// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  site: "https://onend.studio",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap(),
  ],
});
