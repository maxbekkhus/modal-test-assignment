import { createGlobalStyle } from "styled-components";

/**
 * App wide styling (equivalent to commonly used index.css file)
 */
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-font-font-smooth: antialiased;
    -moz-osx-font-smooth: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    background-color: ${({ theme }) => theme.color.background};
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: url("/fonts/Roboto-Regular.ttf") format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url("/fonts/Roboto-Medium.ttf") format('truetype');
  }
`