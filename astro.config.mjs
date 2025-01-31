// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
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
  ],
});
