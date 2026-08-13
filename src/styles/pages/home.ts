import * as stylex from "@stylexjs/stylex";
import { breakpoints } from "../consts.stylex";

export const styles = stylex.create({
  intro: {
    gridArea: "main",
    alignContent: "flex-end",
  },
  headline: {
    fontSize: {
      default: "9vw",
      [breakpoints.desktop]: "3.7vw",
    },
    lineHeight: 1.1,
    fontWeight: 300,
    textTransform: "uppercase",
  },
  location: {
    letterSpacing: "-0.05em",
  },
});
