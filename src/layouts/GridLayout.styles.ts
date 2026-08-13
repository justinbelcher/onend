import * as stylex from "@stylexjs/stylex";
import { breakpoints } from "../styles/consts.stylex";

export const styles = stylex.create({
  areas: {
    gridTemplateAreas: {
      default:
        '"logo logo logo logo logo" "nav nav nav nav nav" "main main main main main" "footer footer footer footer footer"',
      [breakpoints.desktop]:
        '"logo nav nav nav nav nav nav nav nav nav nav nav nav nav" "logo main main main main main main main main main main main main main" "logo footer footer footer footer footer footer footer footer footer footer footer footer footer"',
    },
  },
});
