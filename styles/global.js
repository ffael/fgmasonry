import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .grid{
    padding-left: calc(5% + 1rem);
    padding-right: calc(5% + 1rem);
  }
  .content{
    padding-left: calc(8% + 1rem);
    padding-right: calc(8% + 1rem);
  }
  .section {
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
  }
  .section-xl{
    padding-top: 4.875rem;
    padding-bottom: 4.875rem;
  }

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
