/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "767px" },
        desktop: { min: "768px" },
      },
      fontSize: {
        sm: "0.8rem" /* 12px */,
        base: "1rem" /* 16px */,
        xl: "1.25rem" /* 20px */,
        "2xl": "1.563rem" /* 25px */,
        "3xl": "1.953rem" /* 31px */,
        "4xl": "2.441rem" /* 39px */,
        "5xl": "3.052rem" /* 49px */,
      },
      borderRadius: {
        DEFAULT: "1vw",
      },
      fontFamily: {
        sans: ['"GT Pressura Mono"', '"Courier New"', "monospace"],
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".visually-hidden": {
          border: "0",
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
          width: "1px",
          "white-space": "nowrap",
        },
        ".no-scrollbars": {
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
