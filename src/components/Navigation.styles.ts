import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/tokens.stylex";
import { fontSizes, lineHeights, motion } from "../styles/consts.stylex";

export const styles = stylex.create({
  nav: {
    display: "grid",
    gridTemplateColumns: "subgrid",
  },
  navLink: {
    position: "relative",
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    textTransform: "uppercase",
    textDecorationLine: "none",
    width: "fit-content",
    display: "block",
    "::after": {
      position: "absolute",
      display: "block",
      content: '""',
      height: "2px",
      width: "100%",
      transform: {
        default: "scaleX(0)",
        ":hover": "scaleX(1)",
      },
      transformOrigin: "center",
      transitionProperty: "all",
      transitionDuration: motion.durationShort,
      transitionTimingFunction: motion.easeStandard,
      backgroundColor: colors.primary,
    },
  },
  navLinkActive: {
    "::after": {
      transform: "scaleX(1)",
    },
  },
  igLink: {
    gridColumnStart: "-1",
    display: "flex",
    justifyContent: "flex-end",
  },
});
