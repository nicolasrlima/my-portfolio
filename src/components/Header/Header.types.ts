import { HTMLAttributes, ReactNode } from "react";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
}
