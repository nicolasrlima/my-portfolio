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

export interface Brand {
  primary: Primary;
  secondary: Secondary;
  tertiary: Tertiary;
}

export interface Neutral {
  darkest: string;
  dark: string;
  default: string;
  light: string;
  white: string;
}

export interface Colors {
  brand: Brand;
  neutral: Neutral;
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
