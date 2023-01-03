import styled from "@emotion/styled";

export const CoverContainer = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: calc(100vh - 90px);
  justify-content: center;
  width: 100%;

  ${({ theme }) => `
    background-color: ${theme.colors.decorative.primary};
    padding: ${theme.spacing.large} ${theme.spacing.medium};

    & > .cover-name {
      color: ${theme.colors.text.highlightDefault};
    }
    
    @media (min-width: ${theme.breakpoints.mobile}) {
      padding-left: 20%;
      padding-right: 20%;
      min-height: calc(100vh - 132px);
    }
  `}
`;
