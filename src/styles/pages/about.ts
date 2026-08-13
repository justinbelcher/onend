import * as stylex from "@stylexjs/stylex";
import { breakpoints, fontSizes, lineHeights } from "../consts.stylex";

export const styles = stylex.create({
  byline: {
    fontSize: {
      default: fontSizes.xl3,
      [breakpoints.desktop]: fontSizes.xl4,
    },
    marginBottom: "1.25rem",
    lineHeight: lineHeights.tight,
    textTransform: "uppercase",
  },
});
