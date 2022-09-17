import styled from "@emotion/styled";

export const CustomButton = styled.button`
  cursor: pointer;
  border-style: solid;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 4px;
  border-top-width: 1px;

  ${({ theme }) => `
    background-color: ${theme.colors.neutral.white};
    border-color: ${theme.colors.neutral.dark};
    color: ${theme.colors.neutral.dark};
    font-size: ${theme.typography.fontSize.xsmall};
    font-weight: ${theme.typography.fontWeight.bold};
    padding: ${theme.spacing.medium} ${theme.spacing.large};

    &:hover {
      background-color: ${theme.colors.brand.primary.default};
      color: ${theme.colors.neutral.white};
    }
  `}
`;
