import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
  padding: 0;
  margin: 0;
  font-family: Montserrat, Helvetica Neue, sans-serif;
  }

  h1,
  h2,
  h3,
  h4{
    font-family: Oswald, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  ul{
    margin: 0;
      padding: 0;
      list-style: none;
  }

`;
