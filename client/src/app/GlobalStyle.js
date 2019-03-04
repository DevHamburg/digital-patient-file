import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 0;
  }

  html, body {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }

  input, textarea, button {
    font-size: 1em;
  }

  input, textarea {
    appearance: none;
    border-radius: none;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #4f4f4f;
  }

  button {
    background: dodgerblue ;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;

  }
`
