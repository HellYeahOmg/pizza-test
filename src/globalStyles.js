import { createGlobalStyle } from "styled-components";
import { font_face_montserrat } from "./assets/fonts/Montserrat";
import { font_face_pt_sans } from "./assets/fonts/PT_Sans";

export const GlobalStyles = createGlobalStyle`
  ${font_face_montserrat}
  ${font_face_pt_sans}
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
   
  }

  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
     padding: 0;
    margin: 0;
    background-color: rgba(0,0,0,0.04);
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;
