import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    font-size: 18px;
    min-height: 100vh;
    width: 100vw;
    font-family: 'Inter', sans-serif;
    color: #2C2C2C;
    scroll-behavior: smooth;
  }
`;

export const Container = styled.main``;
