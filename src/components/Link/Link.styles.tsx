import styled from "@emotion/styled";

export const CustomAnchor = styled.a(
  ({ theme }) => `
    color: ${theme.colors.text.subdued};
    height: 100%;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover, &:focus {  
      color: ${theme.colors.actions.primary.hovered};
    }

    &:active {
      color: ${theme.colors.actions.primary.pressed};
    }
  `
);
