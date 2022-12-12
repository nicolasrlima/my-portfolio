import styled from "@emotion/styled";

export const CustomButton = styled.button`
  cursor: pointer;
  border-style: solid;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 4px;
  border-top-width: 1px;
  height: 56px;
  transition: all 0.2s ease-in-out;

  ${({ theme }) => `
    background-color: transparent;
    border-color: ${theme.colors.text.subdued};
    color: ${theme.colors.text.subdued};
    font-size: ${theme.typography.fontSize.xsmall};
    font-weight: ${theme.typography.fontWeight.bold};
    padding: ${theme.spacing.medium} ${theme.spacing.large};

    &:hover, &:focus-visible {
      background-color: ${theme.colors.actions.primary.hovered};
    }

    &:active {
      background-color: ${theme.colors.actions.primary.pressed};
    }

    &:hover, &:focus-visible, &:active {
      color: ${theme.colors.actions.primary.default};
    }
  `}
`;
