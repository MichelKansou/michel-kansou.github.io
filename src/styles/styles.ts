import styled, { createGlobalStyle } from 'styled-components';

import SFProLight from './fonts/SF-Pro-Text-Light.otf';
import Batman from './fonts/batman.ttf';
import SFProLightItalic from './fonts/SF-Pro-Text-LightItalic.otf';
import SFProRegular from './fonts/SF-Pro-Text-Regular.otf';
import SFProRegularItalic from './fonts/SF-Pro-Text-RegularItalic.otf';
import SFProMedium from './fonts/SF-Pro-Text-Medium.otf';
import SFProMediumItalic from './fonts/SF-Pro-Text-MediumItalic.otf';
import SFProSemiBold from './fonts/SF-Pro-Text-Semibold.otf';
import SFProSemiBoldItalic from './fonts/SF-Pro-Text-SemiboldItalic.otf';
import SFProBold from './fonts/SF-Pro-Text-Bold.otf';
import SFProBoldItalic from './fonts/SF-Pro-Text-BoldItalic.otf';
import SFProHeavy from './fonts/SF-Pro-Text-Heavy.otf';
import SFProHeavyItalic from './fonts/SF-Pro-Text-HeavyItalic.otf';

export const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  scroll-behavior: smooth;
}

body {
    background-color: #171821;
    color: white;
}

html {
  font-size: 100%;
  font-family: 'SF-Pro';
  font-weight: normal;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

span {
  font-size: 14px;
  font-family: 'SF-Pro';
  font-weight: normal;
}

a {
  color: #5a1b81;
  opacity: 1;
  text-decoration: none;
}

a:hover {
  opacity: 0.85;
  text-decoration: underline;
}

.content {
  text-align: center;
  margin-top: 2em;
}

.white {
  color: #f9f9f9 !important;
}

@font-face {
  font-family: 'batmanFont';
  src: url(${Batman});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: normal;
  font-weight: 300;
  src: url(${SFProLight});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: italic;
  font-weight: 300;
  src: url(${SFProLightItalic});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: normal;
  font-weight: 400;
  src: url(${SFProRegular});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: italic;
  font-weight: 400;
  src: url(${SFProRegularItalic});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: normal;
  font-weight: 500;
  src: url(${SFProMedium});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: italic;
  font-weight: 500;
  src: url(${SFProMediumItalic});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: normal;
  font-weight: 600;
  src: url(${SFProSemiBold});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: normal;
  font-weight: 600;
  src: url(${SFProSemiBoldItalic});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: normal;
  font-weight: 700;
  src: url(${SFProBold});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: italic;
  font-weight: 700;
  src: url(${SFProBoldItalic});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: normal;
  font-weight: 800;
  src: url(${SFProHeavy});
}
@font-face {
  font-family: 'SF-Pro';
  font-style: italic;
  font-weight: 800;
  src: url(${SFProHeavyItalic});
}
/**
 * Animations
 */
@keyframes Animasearch {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  15%,
  50% {
    transform: scale(0.5);
    opacity: 0;
  }
  65% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
    clip: rect(0px, 35px, 35px, 0px);
  }
  50% {
    clip: rect(0px, 40px, 40px, 0px);
  }
  100% {
    transform: rotate(360deg);
    clip: rect(0px, 35px, 35px, 0px);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotate(0deg);
    clip: rect(0px, 164px, 150px, 0px);
  }
  50% {
    clip: rect(0px, 164px, 0px, 0px);
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
    clip: rect(0px, 164px, 150px, 0px);
  }
}
@keyframes rotate3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes line-scale {
  0% {
    transform: scaley(1);
  }
  50% {
    transform: scaley(0.4);
  }
  100% {
    transform: scaley(1);
  }
}
`;

export const AppContainer = styled.main`
  height: 100%;
`;
