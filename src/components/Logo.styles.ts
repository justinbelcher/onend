import * as stylex from "@stylexjs/stylex";
import { breakpoints } from "../styles/consts.stylex";

export const styles = stylex.create({
  desktopLogo: {
    display: {
      default: "none",
      [breakpoints.desktop]: "block",
    },
  },
  mobileLogo: {
    display: {
      default: "block",
      [breakpoints.desktop]: "none",
    },
    width: "100%",
  },
});
