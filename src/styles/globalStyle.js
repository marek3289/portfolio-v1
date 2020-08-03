import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font.family.Montserrat};
    font-size: ${({ theme }) => theme.font.size.l};
    background-color: ${({ theme }) => theme.main};
    overflow: hidden;
    overflow-y: scroll;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.blocked {
      overflow-y: hidden;
    }
  }
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.tertiary};
    :visited { color: inherit };
  }
  button {
    background-color: transparent;
    border: 0;
  }
`;

export default GlobalStyle;