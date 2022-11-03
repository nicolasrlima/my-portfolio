import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import DropdownMenuContentWithPortal from "./DropdownMenuContentWithPortal";
import { StyledDropdownMenuItem } from "./DropdownMenuItem.styles";

export const DropdownMenuRoot = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = DropdownMenuContentWithPortal;
export const DropdownMenuItem = StyledDropdownMenuItem;
