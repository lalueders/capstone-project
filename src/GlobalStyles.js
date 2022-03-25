import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    max-width: 600px;
    background: #F2F0F0;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.2;
  }

  input[type="text"],
  input[type="date"],
  textarea
 {
    resize: none;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    color: #394a59;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #394a59;
    padding: 0.5rem;
  }
  input:focus {
    color: #394a59;
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
