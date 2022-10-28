import { HTMLAttributes, ReactNode } from "react";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}
