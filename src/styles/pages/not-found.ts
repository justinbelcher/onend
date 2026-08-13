import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import { breakpoints, fontSizes, lineHeights } from "../consts.stylex";

export const styles = stylex.create({
  container: {
    height: "calc(100vh - 48px)",
    display: "flex",
    flexDirection: {
      default: "column",
      [breakpoints.desktop]: "row",
    },
    gap: "3rem",
    justifyContent: "center",
    alignItems: "center",
  },
  scene: {
    width: "400px",
    height: "400px",
  },
  heading: {
    fontSize: fontSizes.xl4,
    lineHeight: lineHeights.xl4,
    marginBottom: "1rem",
    fontWeight: 700,
  },
  pathname: {
    backgroundColor: colors.highlight,
  },
  lastLine: {
    marginBottom: "0",
  },
});
