import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --white: #ffffff;
    --grey: #F2F0F0;
    --darkblue: #394a59;
    --blue: #A3AFBF;
    --lightblue: #dce6f2;


  }

  body {
    min-height: 100vh;
    background-color: var(--grey);
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.2;
  }

  input[type="text"],
  input[type="date"],
  input[type="search"],
  textarea
 {
    resize: none;
    font-size: 1rem;
    font-family: inherit;
    color: var(--darkblue);
    background: var(--white);
    border-radius: 4px;
    border: 1px solid #394a59;
    padding: 0.5rem;
  }
  input:focus {
    color: var(--darkblue);
  }

  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
 }

`;
