import { ElementType, HTMLAttributes } from "react";
import {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  TextColors,
} from "../../styles/Theme.types";

interface VariantsValues {
  fontFamily: keyof FontFamily;
  fontSize: keyof FontSize;
  fontWeight: keyof FontWeight;
  lineHeight: keyof LineHeight;
}

export interface MediaQueryVariants {
  desktop: VariantsValues;
  mobile: VariantsValues;
}

export type Variants =
  | "xlarge"
  | "large"
  | "medium"
  | "small"
  | "heading"
  | "subheading"
  | "button"
  | "body"
  | "subtitle"
  | "caption";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /**
   * Determines the HTML component that will be rendered.
   *
   * @remarks
   * See {@link JSX.IntrinsicElements} for available options.
   *
   * @defaultValue `span`
   */
  component?: ElementType<any>;
  /**
   * Determines the text color.
   *
   * @remarks
   * See {@link TextColors} for available options.
   *
   * @defaultValue `default`
   */
  color?: keyof TextColors;
  /**
   * Applies the styles according to the variant selected
   *
   * @remarks
   * See {@link Variants} for available options and more details
   *
   * @defaultValue `body`
   */
  variant?: Variants;
}
