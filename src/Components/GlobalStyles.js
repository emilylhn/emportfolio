import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --base-font-size: 16px; 
  }

  html {
    font-size: var(--base-font-size);
    scroll-behavior: smooth;
  }

  @media screen and (max-width: 768px) {
    :root {
      --base-font-size: 14px; 
    }
  }

  @media screen and (max-width: 480px) {
    :root {
      --base-font-size: 12px;
    }
  }
`;

export default GlobalStyles;
