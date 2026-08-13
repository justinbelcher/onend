import * as stylex from "@stylexjs/stylex";
import { breakpoints } from "../consts.stylex";

export const styles = stylex.create({
  page: {
    paddingBottom: "1.5rem",
  },
  projectGrid: {
    display: "grid",
    gridArea: "main",
    gridTemplateColumns: {
      default: "repeat(1, minmax(0, 1fr))",
      [breakpoints.desktop]: "repeat(12, minmax(0, 1fr))",
    },
    gap: "1.5rem",
  },
  card: {
    gridColumn: "span 3 / span 3",
  },
});
