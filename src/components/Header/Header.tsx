import { Children, useState } from "react";
import {
  HeaderContainer,
  HeaderHamburgerContainer,
  HeaderNavContainer,
} from "./Header.styles";

import { Close } from "icons/Close";
import { HamburgerMenu } from "icons/HamburgerMenu";
import { HeaderProps } from "./Header.types";
import { Link } from "components/Link";
import { Menu } from "components/Menu";

const Header = ({ children, logo, ...props }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
    setIsMenuOpen((prev) => !prev);
  };

  const childrenThatAreLinks = Children.map(children, (child: any) => {
    if (child?.type === Link) {
      return child;
    }
  });

  return (
    <HeaderContainer {...props}>
      {logo}
      <HeaderNavContainer>{children}</HeaderNavContainer>
      <HeaderHamburgerContainer
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        isOpen={isMenuOpen}
        role="button"
        tabIndex={0}
        onClick={toggleMenu}
      >
        <HamburgerMenu className="menu-icon" id="hamburger-menu" />
        <Close className="menu-icon" id="close-menu" />
      </HeaderHamburgerContainer>
      <Menu isOpen={isMenuOpen} onLinkClick={toggleMenu}>
        {childrenThatAreLinks}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
