import { RootTheme } from "./Theme.types";

export const theme: RootTheme = {
  breakpoints: {
    mobile: "720px",
    tablet: "1024px",
  },
  colors: {
    brand: {
      primary: {
        darkest: "#191238",
        dark: "#291C62",
        default: "#705DCB",
        light: "#A58BFF",
        lightest: "#EEF1FE",
      },
      secondary: { default: "#FDF9D3" },
      tertiary: { default: "#E9FBFE" },
    },
    neutral: {
      darkest: "#0C091C",
      dark: "#53515D",
      default: "#828088",
      light: "#D6D6D6",
      white: "#FFFFFF",
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
