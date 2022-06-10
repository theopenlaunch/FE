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
  .slick-slider {

  >.slick-list{
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 1px 10px 13px 5px rgba(0, 0, 0, 0.08);
    min-width: 250px !important;
    width: 250px !important;
    min-height: 250px !important;
    height: 250px !important;
	@media only screen and (max-width: 1024px) {
    margin: 0 auto 48px auto;
    
  }
  }
    > 
  }
`;

export const Container = styled.main``;
