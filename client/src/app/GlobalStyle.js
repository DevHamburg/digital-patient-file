import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    /* max-width: 1366px;
    max-height: 1024px; */
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    border: 1px solid lightgray;
  }

  html, body {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }
`
