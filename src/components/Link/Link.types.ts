import { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends Omit<NextLinkProps, "passHref"> {
  children?: React.ReactNode;
}
