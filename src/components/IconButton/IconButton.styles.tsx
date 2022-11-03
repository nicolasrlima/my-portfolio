import styled from "@emotion/styled";

export const CustomButton = styled.button`
  cursor: pointer;
  height: 32px;
  padding: 0;
  width: 32px;

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
