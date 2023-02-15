import { MenuProps } from "./Menu.types";
import styled from "@emotion/styled";

export const MenuContainer = styled.div<Pick<MenuProps, "isOpen">>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.base.background};
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s ease-in-out;
  top: 0;
  width: 100vw;

  ${({ isOpen }) =>
    !isOpen &&
    `
      transform: translate3d(100vw, 0, 0)
    `}
`;

export const MenuNavContainer = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => `
    gap: ${theme.spacing.medium};
  `}
`;

export const MenuLinkDivider = styled.hr`
  background-color: ${({ theme }) => theme.colors.base.primary};
  border: 0;
  border-radius: 50%;
  height: 4px;
  margin: 0;
  width: 4px;
`;
