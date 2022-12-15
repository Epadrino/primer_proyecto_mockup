import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'kallisto';
    src: url('/fonts/Kallisto-Thin.otf');
  }
    @font-face {
    font-family: 'abel';
    src: url('/fonts/Abel-Regular.ttf');
    }
  html,
  body {    
    padding: 0;
    margin: 0;
  }

`;

export default GlobalStyle;
