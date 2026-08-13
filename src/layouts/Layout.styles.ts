import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/tokens.stylex";
import { breakpoints } from "../styles/consts.stylex";

export const styles = stylex.create({
  body: {
    color: colors.primary,
    backgroundColor: colors.surface,
    padding: {
      default: "1rem",
      [breakpoints.desktop]: "1.5rem",
    },
  },
  grid: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: {
      default: "repeat(5, minmax(0, 1fr))",
      [breakpoints.desktop]: "repeat(14, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      default: "repeat(5, auto)",
      [breakpoints.desktop]: "2rem 1fr 3rem",
    },
  },
});
