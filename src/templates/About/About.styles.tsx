import * as Tabs from "@radix-ui/react-tabs";

import styled from "@emotion/styled";

export const TAB_TRIGGER_CLASS = "tab__trigger";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 100vh;
  width: 100%;

  ${({ theme }) => `
    background-color: ${theme.colors.surface.highlight};
    padding: ${theme.spacing.large} ${theme.spacing.medium};
    @media (min-width: ${theme.breakpoints.mobile}) {
    }
  `}
`;

export const PictureContainer = styled.div`
  align-self: center;
  line-height: 0;
  position: relative;

  ${({ theme }) => `
    &:before {
      top: 16px;
      right: 16px;
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border: 2.5px solid ${theme.colors.border.depressed};
    }
  `}
`;

export const TabsRoot = styled(Tabs.Root)``;

export const TabsList = styled(Tabs.List)`
  margin-bottom: 28px;
`;

export const TabsTrigger = styled(Tabs.Trigger)`
  background-color: transparent;
  position: relative;
  min-width: 82px;

  ${({ theme }) => `
    &:after {
      background-color: ${theme.colors.base.secondary};
      content: "";
      height: 1px;
      position: absolute;
      right: 0;
      top: 28px;
      min-width: 82px; 
    }

    .${TAB_TRIGGER_CLASS} {
      color: ${theme.colors.actions.secondary.pressed}
    }

    &[data-state="active"] {
      &:after {
        background-color: ${theme.colors.text.highlightSubdued};
        height: 4px;
        top: 26.5px;
      }

      .${TAB_TRIGGER_CLASS} {
        color: ${theme.colors.text.highlightSubdued};
      }
    }
  `}
`;

export const TabsContent = styled(Tabs.Content)`
  display: flex;
  flex-direction: column;
  gap: 28px;
  white-space: pre-line;
`;
