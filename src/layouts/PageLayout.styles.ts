import * as stylex from "@stylexjs/stylex";
import { breakpoints } from "../styles/consts.stylex";

export const styles = stylex.create({
  areas: {
    gridTemplateAreas: {
      default:
        '"logo logo logo logo logo" "nav nav nav nav nav" "hero hero hero hero hero" "main main main main main" "footer footer footer footer footer"',
      [breakpoints.desktop]:
        '"logo nav nav nav nav nav nav hero hero hero hero hero hero hero" "logo main main main main main main hero hero hero hero hero hero hero" "logo footer footer footer footer footer footer hero hero hero hero hero hero hero"',
    },
  },
});
