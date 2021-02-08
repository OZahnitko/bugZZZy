import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};
  html,
  body,
  #root {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    margin: 0;
    min-height: 100%;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }
`;

export default GlobalStyle;
