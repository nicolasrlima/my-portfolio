import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from "react";
import { CustomButton } from "./Button.styles";

const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
> = ({ children, ...props }, ref) => (
  <CustomButton ref={ref} {...props}>
    {children}
  </CustomButton>
);

export default forwardRef(Button);
