import * as stylex from "@stylexjs/stylex";
import { fontSizes, lineHeights } from "../consts.stylex";

export const styles = stylex.create({
  details: {
    gridArea: "main",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },
  title: {
    fontSize: fontSizes.xl4,
    marginBlock: "1.25rem",
    lineHeight: lineHeights.tight,
    textTransform: "uppercase",
  },
});
