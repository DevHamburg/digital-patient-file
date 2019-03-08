import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }

  html, body {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }
`
