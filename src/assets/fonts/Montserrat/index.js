import { css } from "styled-components";

import Montserrat_Thin from "./Montserrat-Thin.ttf";
import Montserrat_ThinItalic from "./Montserrat-ThinItalic.ttf";
import Montserrat_ExtraLight from "./Montserrat-ExtraLight.ttf";
import Montserrat_ExtraLightItalic from "./Montserrat-ExtraLightItalic.ttf";
import Montserrat_Light from "./Montserrat-Light.ttf";
import Montserrat_LightItalic from "./Montserrat-LightItalic.ttf";
import Montserrat_Regular from "./Montserrat-Regular.ttf";
import Montserrat_Italic from "./Montserrat-Italic.ttf";
import Montserrat_Medium from "./Montserrat-Medium.ttf";
import Montserrat_MediumItalic from "./Montserrat-MediumItalic.ttf";
import Montserrat_SemiBold from "./Montserrat-SemiBold.ttf";
import Montserrat_SemiBoldItalic from "./Montserrat-SemiBoldItalic.ttf";
import Montserrat_Bold from "./Montserrat-Bold.ttf";
import Montserrat_BoldItalic from "./Montserrat-BoldItalic.ttf";
import Montserrat_ExtraBold from "./Montserrat-ExtraBold.ttf";
import Montserrat_ExtraBoldItalic from "./Montserrat-ExtraBoldItalic.ttf";
import Montserrat_Black from "./Montserrat-Black.ttf";
import Montserrat_BlackItalic from "./Montserrat-BlackItalic.ttf";

export const font_face_montserrat = css`
  @font-face {
    font-family: "Montserrat";
    font-weight: 100;
    font-style: normal;
    src: url(${Montserrat_Thin}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 100;
    font-style: italic;
    src: url(${Montserrat_ThinItalic}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 200;
    font-style: normal;
    src: url(${Montserrat_ExtraLight}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 200;
    font-style: italic;
    src: url(${Montserrat_ExtraLightItalic}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 300;
    font-style: normal;
    src: url(${Montserrat_Light}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 300;
    font-style: italic;
    src: url(${Montserrat_LightItalic}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url(${Montserrat_Regular}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: italic;
    src: url(${Montserrat_Italic}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url(${Montserrat_Medium}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: italic;
    src: url(${Montserrat_MediumItalic}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url(${Montserrat_SemiBold}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: italic;
    src: url(${Montserrat_SemiBoldItalic}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src: url(${Montserrat_Bold}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: italic;
    src: url(${Montserrat_BoldItalic}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 800;
    font-style: normal;
    src: url(${Montserrat_ExtraBold}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 800;
    font-style: italic;
    src: url(${Montserrat_ExtraBoldItalic}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 900;
    font-style: normal;
    src: url(${Montserrat_Black}) format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 900;
    font-style: italic;
    src: url(${Montserrat_BlackItalic}) format("truetype");
  }
`;
