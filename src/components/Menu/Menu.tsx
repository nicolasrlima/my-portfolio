import { Children } from "react";
import {
  MenuContainer,
  MenuLinkDivider,
  MenuNavContainer,
} from "./Menu.styles";
import { MenuProps } from "./Menu.types";

const Menu = ({ children, isOpen, ...props }: MenuProps) => (
  <MenuContainer isOpen={isOpen} {...props}>
    <MenuNavContainer>
      {Children.map(children, (child, index) => (
        <>
          <span key={child?.toString()}>{child}</span>
          {index + 1 !== Children.count(children) ? <MenuLinkDivider /> : null}
        </>
      ))}
    </MenuNavContainer>
  </MenuContainer>
);

export default Menu;
