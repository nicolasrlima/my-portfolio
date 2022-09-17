import styled from "@emotion/styled";
import { TypographyProps } from "./Typography.types";

export const CustomTypography = styled.span<Omit<TypographyProps, "as">>(
  ({ fontFamily, fontSize, fontWeight, lineHeight, theme }) => `
    font-family: "${
      theme.typography.fontFamily[fontFamily || "primary"]
    }", sans-serif;
    font-size: ${theme.typography.fontSize[fontSize || "medium"]};
    font-weight: ${theme.typography.fontWeight[fontWeight || "regular"]};
    line-height: ${theme.typography.lineHeight[lineHeight || "medium"]};
  `
);
