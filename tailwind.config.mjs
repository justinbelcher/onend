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
        DEFAULT: "1.5vh",
      },
      fontFamily: {
        sans: ['"GT Pressura Mono"', '"Courier New"', "monospace"],
      },
      gridTemplateColumns: {
        5: "repeat(5, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        desktop: "2rem 1fr 3rem",
        mobile: "repeat(5, auto)",
      },
      gridTemplateAreas: {
        desktop: [
          "logo nav nav nav nav nav nav hero hero hero hero hero hero hero",
          "logo main main main main main main hero hero hero hero hero hero hero",
          "logo footer footer footer footer footer footer hero hero hero hero hero hero hero",
        ],
        "desktop-work": [
          "logo nav nav nav nav nav nav nav nav nav nav nav nav nav",
          "logo main main main main main main main main main main main main main",
          "logo footer footer footer footer footer footer footer footer footer footer footer footer footer",
        ],
        mobile: [
          "logo logo logo logo logo",
          "nav nav nav nav nav",
          "hero hero hero hero hero",
          "main main main main main",
          "footer footer footer footer footer",
        ],
        "mobile-work": [
          "logo logo logo logo logo",
          "nav nav nav nav nav",
          "main main main main main",
          "footer footer footer footer footer",
        ],
        "mobile-footer": ["contact logo", "ig logo"],
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
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
  variants: {
    gridTemplateAreas: ["responsive"],
  },
};
