import * as stylex from "@stylexjs/stylex";
import { breakpoints, radii } from "../styles/consts.stylex";

export const styles = stylex.create({
  image: {
    borderRadius: radii.sm,
    objectFit: "cover",
    objectPosition: "center",
    height: {
      default: null,
      [breakpoints.desktop]: "calc(100vh - 48px)",
    },
  },
});
