/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
