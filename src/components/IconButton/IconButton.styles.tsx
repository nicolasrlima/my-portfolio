import styled from "@emotion/styled";

export const CustomButton = styled.button`
  cursor: pointer;
  padding: 0;
  & > svg > path {
    transition: all 0.2s ease-in-out;
  }

  ${({ theme }) => `
    background-color: transparent;

    &:hover {
      & > svg > path {
        fill: ${theme.colors.brand.primary.default};
      }
    }
  `}
`;
