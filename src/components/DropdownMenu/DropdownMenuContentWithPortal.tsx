import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { StyledDropdownContent } from "./DropdownMenuItem.styles";

const DropdownMenuContentWithPortal = ({
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledDropdownContent {...props}>{children}</StyledDropdownContent>
    </DropdownMenuPrimitive.Portal>
  );
};

export default DropdownMenuContentWithPortal;
