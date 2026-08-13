// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";
import { transformAsync } from "@babel/core";
import styleXBabelPlugin from "@stylexjs/babel-plugin";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Compiles stylex.create/defineVars/defineConsts calls in JS/TS modules.
 * CSS generation is handled separately by @stylexjs/postcss-plugin.
 * @returns {import("vite").Plugin}
 */
function stylex() {
  return {
    name: "vite-plugin-stylex-inline",
    enforce: "pre",
    async transform(code, id) {
      const [filename] = id.split("?");
      if (!/\.[jt]sx?$/.test(filename)) return null;
      if (filename.includes("/node_modules/")) return null;
      if (!code.includes("@stylexjs/stylex")) return null;

      const result = await transformAsync(code, {
        filename,
        babelrc: false,
        configFile: false,
        presets: [["@babel/preset-typescript", {}]],
        plugins: [
          [
            styleXBabelPlugin,
            {
              dev: false,
              runtimeInjection: false,
              treeshakeCompensation: true,
              unstable_moduleResolution: { type: "commonJS", rootDir },
            },
          ],
        ],
        sourceMaps: true,
      });

      if (result?.code == null) return null;
      return { code: result.code, map: result.map };
    },
  };
}

export default defineConfig({
  site: "https://onend.studio",

  vite: {
    plugins: [stylex()],
  },

  integrations: [
    react(),
    icon({
      iconDir: "src/assets/icons",
    }),
    sitemap(),
  ],
});
