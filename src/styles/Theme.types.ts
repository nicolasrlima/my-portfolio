export interface Breakpoints {
  mobile: string;
  tablet: string;
}

export interface Primary {
  darkest: string;
  dark: string;
  default: string;
  light: string;
  lightest: string;
}

export interface Secondary {
  default: string;
}

export interface Tertiary {
  default: string;
}

export interface BaseColors {
  primary: string;
  secondary: string;
  background: string;
}

export interface SurfaceColors {
  white: string;
  highlight: string;
  subdued: string;
  hovered: string;
}

export interface TextColors {
  default: string;
  subdued: string;
  disabled: string;
  highlightDefault: string;
  highlightSubdued: string;
}

export interface BorderColors {
  default: string;
  subdued: string;
  depressed: string;
}

export interface ActionColors {
  primary: {
    default: string;
    hovered: string;
    pressed: string;
  };
  secondary: {
    default: string;
    pressed: string;
  };
}

export interface DecorativeColors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface Colors {
  base: BaseColors;
  surface: SurfaceColors;
  text: TextColors;
  border: BorderColors;
  actions: ActionColors;
  decorative: DecorativeColors;
}

export interface Border {
  radius: string;
}

export interface BoxShadow {
  cardHover: string;
  dropdown: string;
}

export interface Spacing {
  zero: string;
  micro: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  giant: string;
}

export interface FontFamily {
  yesevaOne: "Yeseva One";
  epilogue: "Epilogue";
  roboto: "Roboto";
}

export interface FontSize {
  giant: "5.25rem";
  huge: "4.5rem";
  xlarge: "3.5rem";
  large: "2.5rem";
  medium: "2rem";
  small: "1.5rem";
  xsmall: "1.25rem";
  micro: "1rem";
  nano: "0.875rem";
  pico: "0.75rem";
}

export interface FontWeight {
  light: number;
  regular: number;
  medium: number;
  bold: number;
}

export interface LineHeight {
  xlarge: "6rem";
  large: "5.25rem";
  medium: "4rem";
  small: "2.5rem";
  xsmall: "2rem";
  micro: "1.5rem";
  auto: "auto";
}

export interface Typography {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
}

export interface RootTheme {
  breakpoints: Breakpoints;
  colors: Colors;
  border: Border;
  boxShadow: BoxShadow;
  spacing: Spacing;
  typography: Typography;
}
