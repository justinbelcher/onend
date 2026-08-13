import * as stylex from "@stylexjs/stylex";

// Exact color values carried over from the previous Tailwind v4 theme.
export const colors = stylex.defineVars({
  surface: "oklch(92.3% 0.003 48.717)", // stone-200
  primary: "oklch(21.6% 0.006 56.043)", // stone-900
  secondary: "oklch(44.4% 0.011 73.639)", // stone-600
  divider: "oklch(86.9% 0.005 56.366)", // stone-300
  overlay: "oklch(98.5% 0.001 106.423)", // stone-50
  selection: "oklch(90.5% 0.182 98.111)", // yellow-300
  highlight: "oklch(97.3% 0.071 103.193)", // yellow-100
});
