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
  logo: string;
  primary: string;
}

export interface FontSize {
  giant: string;
  huge: string;
  xlarge: string;
  large: string;
  medium: string;
  small: string;
  xsmall: string;
  micro: string;
}

export interface FontWeight {
  light: number;
  regular: number;
  medium: number;
  bold: number;
}

export interface LineHeight {
  xlarge: string;
  large: string;
  medium: string;
  small: string;
  xsmall: string;
  micro: string;
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
