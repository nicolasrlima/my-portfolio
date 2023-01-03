import styled from "@emotion/styled";
import {
  MediaQueryVariants,
  TypographyProps,
  Variants,
} from "./Typography.types";

const variantsMap: { [key in Variants]: MediaQueryVariants } = {
  xlarge: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "giant",
      fontWeight: "bold",
      lineHeight: "large",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "xlarge",
      fontWeight: "bold",
      lineHeight: "auto",
    },
  },
  large: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "huge",
      fontWeight: "bold",
      lineHeight: "large",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "small",
      fontWeight: "bold",
      lineHeight: "xsmall",
    },
  },
  medium: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "xlarge",
      fontWeight: "bold",
      lineHeight: "medium",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "medium",
      fontWeight: "bold",
      lineHeight: "auto",
    },
  },
  small: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "medium",
      fontWeight: "medium",
      lineHeight: "small",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "xsmall",
      fontWeight: "medium",
      lineHeight: "micro",
    },
  },
  heading: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "small",
      fontWeight: "medium",
      lineHeight: "xsmall",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "micro",
      fontWeight: "medium",
      lineHeight: "auto",
    },
  },
  subheading: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "xsmall",
      fontWeight: "medium",
      lineHeight: "micro",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "micro",
      fontWeight: "medium",
      lineHeight: "micro",
    },
  },
  button: {
    desktop: {
      fontFamily: "roboto",
      fontSize: "xsmall",
      fontWeight: "bold",
      lineHeight: "auto",
    },
    mobile: {
      fontFamily: "roboto",
      fontSize: "nano",
      fontWeight: "bold",
      lineHeight: "auto",
    },
  },
  body: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "micro",
      fontWeight: "regular",
      lineHeight: "micro",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "nano",
      fontWeight: "regular",
      lineHeight: "micro",
    },
  },
  subtitle: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "micro",
      fontWeight: "regular",
      lineHeight: "micro",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "pico",
      fontWeight: "regular",
      lineHeight: "micro",
    },
  },
  caption: {
    desktop: {
      fontFamily: "epilogue",
      fontSize: "pico",
      fontWeight: "regular",
      lineHeight: "auto",
    },
    mobile: {
      fontFamily: "epilogue",
      fontSize: "pico",
      fontWeight: "regular",
      lineHeight: "auto",
    },
  },
};

export const CustomTypography = styled.span<TypographyProps>(
  ({ color = "default", theme, variant = "body" }) => `
    color: ${theme.colors.text[color]};
    font-family: "${
      theme.typography.fontFamily[variantsMap[variant].mobile.fontFamily]
    }", sans-serif;
    font-size: ${
      theme.typography.fontSize[variantsMap[variant].mobile.fontSize]
    };
    font-weight: ${
      theme.typography.fontWeight[variantsMap[variant].mobile.fontWeight]
    };
    line-height: ${
      theme.typography.lineHeight[variantsMap[variant].mobile.lineHeight]
    };

    @media (min-width: ${theme.breakpoints.mobile}) {
      font-family: "${
        theme.typography.fontFamily[variantsMap[variant].desktop.fontFamily]
      }", sans-serif;
      font-size: ${
        theme.typography.fontSize[variantsMap[variant].desktop.fontSize]
      };
      font-weight: ${
        theme.typography.fontWeight[variantsMap[variant].desktop.fontWeight]
      };
      line-height: ${
        theme.typography.lineHeight[variantsMap[variant].desktop.lineHeight]
      };
    }
  `
);
