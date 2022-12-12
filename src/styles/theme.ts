import { RootTheme } from "./Theme.types";

export const theme: RootTheme = {
  breakpoints: {
    mobile: "720px",
    tablet: "1024px",
  },
  colors: {
    base: {
      primary: "#705DCB",
      secondary: "#D6D6D6",
      background: "#FFFFFF",
    },
    surface: {
      white: "#FFFFFF",
      highlight: "#EEF1FE",
      subdued: "#E9FBFE",
      hovered: "#291C62",
    },
    text: {
      default: "#0C091C",
      subdued: "#53515D",
      disabled: "#D6D6D6",
      highlightDefault: "#705DCB",
      highlightSubdued: "#9CA5FA",
    },
    border: {
      default: "#53515D",
      subdued: "#D6D6D6",
      depressed: "#0C091C",
    },
    actions: {
      primary: {
        default: "#FFFFFF",
        hovered: "#705DCB",
        pressed: "#544699",
      },
      secondary: {
        default: "#D6D6D6",
        pressed: "#828088",
      },
    },
    decorative: {
      primary: "#FDF9D3",
      secondary: "#E9FBFE",
      tertiary: "#191238",
    },
  },
  border: {
    radius: "4px",
  },
  boxShadow: {
    cardHover: "-10px 11px 0 0 #0C091C",
    dropdown: "0 4px 8px 0 #10184029",
  },
  spacing: {
    zero: "0",
    micro: "4px",
    xsmall: "8px",
    small: "12px",
    medium: "16px",
    large: "28px",
    xlarge: "44px",
    xxlarge: "72px",
    giant: "116px",
  },
  typography: {
    fontFamily: {
      logo: "Yeseva One",
      primary: "Epilogue",
    },
    fontSize: {
      giant: "5.25rem",
      huge: "4.5rem",
      xlarge: "3.5rem",
      large: "2.5rem",
      medium: "2rem",
      small: "1.5rem",
      xsmall: "1.25rem",
      micro: "1rem",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      xlarge: "6rem",
      large: "5.25rem",
      medium: "4rem",
      small: "2.5rem",
      xsmall: "2rem",
      micro: "1.5rem",
    },
  },
};
