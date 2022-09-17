import { HTMLAttributes } from "react";
import { CustomButton } from "./Button.styles";

const Button = ({ children, ...props }: HTMLAttributes<HTMLButtonElement>) => (
  <CustomButton {...props}>{children}</CustomButton>
);

export default Button;
