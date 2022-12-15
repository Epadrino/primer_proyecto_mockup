import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'kallisto';
    src: url('/public/fonts/Kallisto/Kallisto Bold.otf');
  }
  @font-face {
    font-family: 'GandhiSerifBoldItalic';
    src: url('/fonts/GandhiSerif-BoldItalic.otf');
  }
  @font-face {
    font-family: 'GandhiSerifItalic';
    src: url('/fonts/GandhiSerif-Italic.otf');
  }
  @font-face {
    font-family: 'GandhiSerifRegular';
    src: url('/fonts/GandhiSerif-Regular.otf');
  }

  html,
  body {    
    padding: 0;
    margin: 0;
  }

`;

export default GlobalStyle;
