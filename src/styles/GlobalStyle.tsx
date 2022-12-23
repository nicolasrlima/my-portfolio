import { Global, css } from "@emotion/react";
import { cssGeneral } from "./general.styles";
import { cssReset } from "./reset.styles";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${cssGeneral}
      ${cssReset}
    `}
  />
);

export default GlobalStyle;
