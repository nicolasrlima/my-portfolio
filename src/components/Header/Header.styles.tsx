import styled from "@emotion/styled";
import { MenuProps } from "components/Menu/Menu.types";

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 90px;
  justify-content: space-between;
  padding: 0 16px;

  ${({ theme }) => `
    background-color: ${theme.colors.brand.secondary.default};
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 132px;
    padding: 0 62px;
  }
`;

export const HeaderHamburgerContainer = styled.div<Pick<MenuProps, "isOpen">>`
  height: 24px;
  position: relative;
  width: 24px;
  z-index: 999;

  .menu-icon {
    position: absolute;
    transition: opacity 0.3s ease-in-out;
  }

  ${({ isOpen }) => `
    #hamburger-menu {
        opacity: ${isOpen ? 0 : 1};
    }

    #close-menu {
        opacity: ${isOpen ? 1 : 0};
    }
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const HeaderNavContainer = styled.div`
  align-items: center;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    gap: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 78px;
  }
`;
