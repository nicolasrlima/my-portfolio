import { css } from "@emotion/react";

export const cssReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
