import styled from "@emotion/styled";

export const CustomAnchor = styled.a(
  ({ theme }) => `
    color: ${theme.colors.neutral.dark};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {  
      color: ${theme.colors.brand.primary.default};
    }
  `
);
