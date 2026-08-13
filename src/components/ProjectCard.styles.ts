import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/tokens.stylex";
import { radii } from "../styles/consts.stylex";

// Marks the card as the ancestor observed by stylex.when.ancestor() below.
export const cardMarker = stylex.defaultMarker();

export const styles = stylex.create({
  link: {
    textDecorationLine: "none",
  },
  imageFrame: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderRadius: radii.sm,
  },
  image: {
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "0.175s",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    scale: {
      default: null,
      "@media (hover: hover)": {
        default: null,
        [stylex.when.ancestor(":hover")]: "110% 110%",
      },
    },
  },
  caption: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "0.5rem",
  },
  title: {
    textTransform: "uppercase",
    textDecorationLine: {
      default: null,
      "@media (hover: hover)": {
        default: null,
        [stylex.when.ancestor(":hover")]: "underline",
      },
    },
  },
  year: {
    marginBottom: "0",
    color: colors.secondary,
  },
});
