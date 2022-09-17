import { ElementType, HTMLAttributes } from "react";
import {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
} from "../../styles/Theme.types";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /**
   * Determines the font family.
   *
   * @remarks
   * See {@link JSX.IntrinsicElements} for available options.
   *
   * @defaultValue `span`
   */
  as?: ElementType<any>;
  /**
   * Determines the font family.
   *
   * @remarks
   * See {@link FontFamily} for available options.
   *
   * @defaultValue `primary`
   */
  fontFamily?: keyof FontFamily;
  /**
   * Determines the font size.
   *
   * @remarks
   * See {@link FontSize} for available options.
   *
   * @defaultValue `medium`
   */
  fontSize?: keyof FontSize;
  /**
   * Determines the font weight.
   *
   * @remarks
   *
   * See {@link FontWeight} for available options.
   *
   * @defaultValue `regular`
   */
  fontWeight?: keyof FontWeight;
  /**
   * Determines the line height.
   *
   * @remarks
   * See {@link LineHeight} for available options.
   *
   * @defaultValue `medium`
   */
  lineHeight?: keyof LineHeight;
}
