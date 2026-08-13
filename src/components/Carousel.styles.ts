import * as stylex from "@stylexjs/stylex";
import { colors } from "../styles/tokens.stylex";
import { breakpoints, radii } from "../styles/consts.stylex";

export const styles = stylex.create({
  wrapper: {
    position: "relative",
  },
  track: {
    display: "flex",
    gap: "0.5rem",
    overflowX: "scroll",
    scrollbarWidth: "none",
    scrollSnapType: "x mandatory",
    width: "100%",
  },
  slide: {
    scrollSnapAlign: "center",
    height: {
      default: null,
      [breakpoints.desktop]: "calc(100vh - 48px)",
    },
    flexShrink: 0,
    width: "100%",
  },
  image: {
    borderRadius: radii.sm,
    objectFit: "cover",
    objectPosition: "center",
    height: "100%",
  },
  counter: {
    position: "absolute",
    bottom: "0.75rem",
    right: "0.75rem",
    backgroundColor: stylex.firstThatWorks(
      "color-mix(in oklab, oklch(98.5% 0.001 106.423) 75%, transparent)",
      "#fafaf9bf"
    ),
    color: colors.secondary,
    paddingInline: "0.5rem",
    borderRadius: radii.lg,
    display: "flex",
    alignItems: "center",
  },
});
