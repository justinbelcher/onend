import * as stylex from "@stylexjs/stylex";
import { breakpoints } from "../styles/consts.stylex";

export const styles = stylex.create({
  footer: {
    display: "grid",
    gridArea: "footer",
    gridTemplateColumns: {
      default: null,
      [breakpoints.desktop]: "subgrid",
    },
    gridTemplateAreas: {
      default: '"contact logo" "ig logo"',
      [breakpoints.desktop]: "none",
    },
    gap: "1rem",
    rowGap: {
      default: null,
      [breakpoints.desktop]: "0rem",
    },
    paddingBottom: {
      default: null,
      [breakpoints.desktop]: "2rem",
    },
  },
  contact: {
    gridArea: "contact",
    gridColumn: {
      default: null,
      [breakpoints.desktop]: "span 2 / span 2",
    },
  },
  ig: {
    gridArea: "ig",
    gridColumn: {
      default: null,
      [breakpoints.desktop]: "span 2 / span 2",
    },
  },
  address: {
    fontStyle: "normal",
  },
  mark: {
    display: "flex",
    justifyContent: "flex-end",
    gridArea: "logo",
    gridColumnStart: {
      default: null,
      [breakpoints.desktop]: "-1",
    },
  },
  markHiddenOnDesktop: {
    display: {
      default: "flex",
      [breakpoints.desktop]: "none",
    },
  },
  markHiddenOnMobile: {
    display: {
      default: "none",
      [breakpoints.desktop]: "block",
    },
  },
  visuallyHidden: {
    borderWidth: "0",
    borderStyle: "none",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
  },
});
