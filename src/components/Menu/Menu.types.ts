import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @default `false`
   * Sets the menu's state
   */
  isOpen?: boolean;
  /**
   * Callback function to be triggered when a link is clicked
   */
  onLinkClick?: MouseEventHandler<HTMLSpanElement>;
}
