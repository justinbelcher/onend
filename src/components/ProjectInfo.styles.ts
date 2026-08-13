import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/tokens.stylex";

export const styles = stylex.create({
  section: {
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderColor: colors.divider,
  },
});
