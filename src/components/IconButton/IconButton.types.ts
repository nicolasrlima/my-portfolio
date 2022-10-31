import { HTMLAttributes, ReactElement, SVGProps } from "react";

export interface IconButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * Determines the Icon that will be rendered.
   * @remarks
   * See {@link ReactElement<SVGProps<SVGSVGElement>>} for more details.
   *
   * @example How to use IconButton
   *
   * ```tsx
   *  <IconButton icon={<Logo />} />;
   * ```
   */
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}
