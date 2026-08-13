import * as stylex from "@stylexjs/stylex";

// Named grid areas of the page-level layout grids.
export const grid = stylex.create({
  inLogo: { gridArea: "logo" },
  inNav: { gridArea: "nav" },
  inMain: { gridArea: "main" },
  inHero: { gridArea: "hero" },
  inFooter: { gridArea: "footer" },
  inContact: { gridArea: "contact" },
  inIg: { gridArea: "ig" },
});
