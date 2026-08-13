import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/tokens.stylex";

export const styles = stylex.create({
  line: {
    display: "grid",
    minHeight: "2rem",
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
    alignItems: "center",
    gap: "1.5rem",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderColor: colors.divider,
  },
  label: {
    gridColumn: "span 2 / span 2",
    color: colors.secondary,
  },
  value: {
    gridColumn: "span 4 / span 4",
    marginBottom: "0",
  },
});
