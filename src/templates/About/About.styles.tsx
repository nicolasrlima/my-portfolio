import * as Tabs from "@radix-ui/react-tabs";

import { AboutTabSliderDimensions } from "./types";
import styled from "@emotion/styled";

export const TAB_TRIGGER_CLASS = "tab__trigger";
export const TAB_SLIDER_CLASS = "tab__slider";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  width: 100%;

  > * {
    z-index: 10;
  }

  ${({ theme }) => `
    background-color: ${theme.colors.surface.subdued};
    padding: ${theme.spacing.large} ${theme.spacing.medium};

    @media (min-width: ${theme.breakpoints.mobile}) {
      background-color: ${theme.colors.surface.white};
      padding-left: 20%;
      padding-right: 20%;

      &:before {
        background-color: ${theme.colors.surface.subdued};
        bottom: 0;
        content: "";
        height: 90vh;
        position: absolute;
        right: 0;
        width: 70vw;
      }
    }
  `}
`;

export const AboutTitleContainer = styled.div`
  align-items: center;
  display: flex;

  ${({ theme }) => `
    gap: ${theme.spacing.medium};
  `}

  & > .about__title {
    white-space: nowrap;
  }
`;

export const AboutDecorationDivider = styled.span`
  display: none;
  height: 1px;
  position: relative;
  width: 100%;

  ${({ theme }) => `
    background-color: ${theme.colors.border.subdued};

    @media (min-width: ${theme.breakpoints.mobile}) {
      display: block;

      &:before,
      &:after {
        border-top: 6px solid transparent;
        bottom: 0;
        content: "";
        height: 0;
        position: absolute;
        width: 0;
      }

      &:before {
        border-left: 6px solid ${theme.colors.text.highlightSubdued};
        border-right: 6px solid transparent;
        left: -8px;
        transform: rotate(225deg);
      }

      &:after {
        border-left: 6px solid transparent;
        border-right: 6px solid ${theme.colors.text.highlightSubdued};
        right: -8px;
        transform: rotate(135deg);
      }
    }
  `}
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.mobile}) {
      display: grid;
      gap: 70px;
      grid-template-columns: auto 1fr;
    }
  `}
`;

export const PictureContainer = styled.div`
  align-self: center;
  line-height: 0;
  position: relative;
  width: fit-content;

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

    @media (min-width: ${theme.breakpoints.mobile}) {
      align-self: start;
    }
  `}
`;

export const TabsRoot = styled(Tabs.Root)`
  z-index: 10;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.mobile}) {
      display: flex;
    }
  `}
`;

export const TabsList = styled(Tabs.List)<AboutTabSliderDimensions>`
  margin-bottom: 28px;
  position: relative;
  width: fit-content;
  .${TAB_TRIGGER_CLASS} {
    transition: color 0.5s ease-in-out;
  }

  ${({ left, height, theme, top, width }) => `
    & > .${TAB_SLIDER_CLASS} {
      background-color: ${theme.colors.text.highlightSubdued};
      height: 4px;
      left: ${left}px;
      min-width: ${width}px;
      position: absolute;
      top: 26.5px;
      transition: 0.5s ease-in-out;
      z-index: 10;
    }

    &:after {
      background-color: ${theme.colors.base.secondary};
      content: "";
      height: 1px;
      position: absolute;
      right: 0;
      top: 28px;
      min-width: 100%;
    }

    &[data-state="active"] {
      .${TAB_TRIGGER_CLASS} {
        color: ${theme.colors.text.highlightSubdued};
      }
    }

    @media (min-width: ${theme.breakpoints.mobile}) {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: 40px;
      margin-bottom: 0;
      order: 1;

      &:after {
        min-height: 100%;
        min-width: 1px;
        left: 0;
        top: 0;
        width: 1px;
      }

      & > .${TAB_SLIDER_CLASS} {
        height: ${height}px;
        left: -2px;
        min-width: 4px;
        top: ${top}px;
        width: 4px;
      }
    }
  `}
`;

export const TabsTrigger = styled(Tabs.Trigger)`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  min-width: 82px;

  ${({ theme }) => `
    .${TAB_TRIGGER_CLASS} {
      color: ${theme.colors.actions.secondary.pressed}
    }

    &[data-state="active"] {
      .${TAB_TRIGGER_CLASS} {
        color: ${theme.colors.text.highlightSubdued};
      }
    }

    @media (min-width: ${theme.breakpoints.mobile}) {
      padding-bottom: ${theme.spacing.medium};
      padding-left: ${theme.spacing.xsmall};
      padding-right: ${theme.spacing.large};
      padding-top: ${theme.spacing.medium};

      &:after {
        height: 53px;
        left: 0;
        top: 28px;
        min-width: 1px;
        width: 1px;
        z-index: -1;
      }
    }
  `}
`;

export const TabsContent = styled(Tabs.Content)`
  display: flex;
  flex-direction: column;
  gap: 28px;
  white-space: pre-line;

  ${({ theme }) => `
  
    &[data-state="active"] {
      @media (min-width: ${theme.breakpoints.mobile}) {
        margin-right: 48px;
      }
    }
  `}
`;
