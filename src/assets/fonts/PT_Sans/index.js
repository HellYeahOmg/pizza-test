import { css } from "styled-components";
import PT_Sans_Regular from "./PT_Sans-Web-Regular.ttf";
import PT_Sans_Italic from "./PT_Sans-Web-Italic.ttf";
import PT_Sans_Bold from "./PT_Sans-Web-Bold.ttf";
import PT_Sans_BoldItalic from "./PT_Sans-Web-BoldItalic.ttf";

export const font_face_pt_sans = css`
  @font-face {
    font-family: "PT Sans";
    font-weight: 400;
    font-style: normal;
    src: url(${PT_Sans_Regular});
  }

  @font-face {
    font-family: "PT Sans";
    font-weight: 400;
    font-style: italic;
    src: url(${PT_Sans_Italic});
  }

  @font-face {
    font-family: "PT Sans";
    font-weight: 700;
    font-style: normal;
    src: url(${PT_Sans_Bold});
  }

  @font-face {
    font-family: "PT Sans";
    font-weight: 700;
    font-style: italic;
    src: url(${PT_Sans_BoldItalic});
  }
`;
