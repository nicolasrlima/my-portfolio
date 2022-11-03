import { forwardRef, ForwardRefRenderFunction } from "react";
import { CustomButton } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";

const IconButton: ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = ({ icon, ...props }, ref) => (
  <CustomButton ref={ref} {...props}>
    {icon}
  </CustomButton>
);

export default forwardRef(IconButton);
