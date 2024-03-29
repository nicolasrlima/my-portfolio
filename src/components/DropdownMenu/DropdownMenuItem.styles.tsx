import styled from "@emotion/styled";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export const StyledDropdownMenuItem = styled(DropdownMenuPrimitive.Item)`
  ${({ theme }) => `
    color: ${theme.colors.text.default};
    cursor: pointer;
    padding: ${theme.spacing.medium} ${theme.spacing.small};
    position: relative;

    &:hover, &:focus {
      background-color: ${theme.colors.surface.highlight};
      color: ${theme.colors.base.primary};
      outline: none;

      &::before {
        content: "";
        background-color: ${theme.colors.base.primary};
        border-radius: 0 2px 2px 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 2px;
      }
    }
  `}
`;

export const StyledDropdownContent = styled(DropdownMenuPrimitive.Content)`
  ${({ theme }) => `
    background-color: ${theme.colors.base.background};
    border-radius: ${theme.border.radius};
    box-shadow: ${theme.boxShadow.dropdown};
  `};
`;
