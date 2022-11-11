import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
    * {
      box-sizing: border-box;  
    }

    html {
      scroll-behavior: smooth;
      overflow-x: hidden;
    }

    body {
      line-height: 1;
      background-color: #EBF1F4;
    }

    body,
    html {
      font-family: 'AppleSDGothicNeoM', sans-serif;
    }

    ol,
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
      
      &:active,
      &:hover {
        outline: 0;
      }
    }

    input,
    select,
    button {
      border: none;
      outline: none;
      box-sizing: border-box;
      background: none;
    }

    button {   
      font: inherit;
      text-decoration: none;
      padding: 0;
      cursor: pointer;
    } 

    input {
      text-decoration: none;
      transition: all 0.1s linear;
    }

    input:focus,
    textarea:focus {
      outline: none;
    }
  `;
export default GlobalStyles;
