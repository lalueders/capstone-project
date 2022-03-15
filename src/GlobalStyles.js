import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    margin: 0 auto;
    max-width: 600px;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.2;
    background: #F2F0F0;
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
