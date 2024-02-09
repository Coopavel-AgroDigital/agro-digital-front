import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.font.family.inter};

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.font.family.inter} !important;
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.white};
    overflow-x: hidden;
  }

  p {
    line-height: 25px;
  }

  h1 {
    font-size: ${theme.font.sizes.xlarge};
  }

  h2 {
    font-size: ${theme.font.sizes.large};
  }

  h3 {
    font-size: ${theme.font.sizes.medium};
  }

  input {
    width: 100%;
    background-color: ${theme.colors.gray};
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
  }

  a {
    width: 100%;
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles
