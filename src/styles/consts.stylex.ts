import * as stylex from "@stylexjs/stylex";

export const breakpoints = stylex.defineConsts({
  desktop: "@media (min-width: 768px)",
});

export const motion = stylex.defineConsts({
  easeStandard: "cubic-bezier(0.2, 0, 0, 1)",
  durationShort: "0.2s",
});

export const radii = stylex.defineConsts({
  sm: "1.5vh",
  lg: "0.5rem",
});

export const fontSizes = stylex.defineConsts({
  xl: "1.375rem",
  xl3: "2.25rem",
  xl4: "2.5rem",
});

export const lineHeights = stylex.defineConsts({
  xl: "1.4",
  xl3: "1.2",
  xl4: "calc(2.5 / 2.25)",
  tight: "1.25",
});
