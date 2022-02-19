import { createGlobalStyle } from 'styled-components';
import theme from '../themes/tecredi-blue';

const GlobalStyle = createGlobalStyle`

:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}


.ant-select-selector, .ant-input {
  height: 60px !important;
  border-radius: 5px !important;
  border: 1px solid rgb(204, 204, 204);
}


.ant-select-selection-search-input {
  height: 100%;
  position: absolute;
  bottom: 1px;
  font-size: 18px;
}

.ant-input {
  font-size: 18px;
  padding-top: 25px;
}


.ant-select-item {
  min-height: 40px;
  line-height: 40px;
}

.ant-select-item-option-selected {
  background-color: ${theme.primaryColorLight};
  color: white;
  opacity: 0.8;
}

.ant-select-item-option-active {
  font-weight: bold;
}

.ant-select-selection-item  {
  top: 25px;
  font-size: 18px;
  color: black;
}

.ant-select-dropdown {
  background-color: white
}

.ant-form-item-explain-error {
  color: red;
}

.float-label {
  position: relative;
  margin-bottom: 12px;
}

.label {
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 20px;
  transition: 0.2s ease all;
}

.label-float {
  top: 5px;
  font-size: 12px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #1D4588;
  text-align: left;
  background-color: #fff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

.slab {
  font-family: "Roboto Slab", sans-serif;
}

.relative {position: relative;}

.absolute {position: absolute;}

.top-1 {top: 1px}
.top-2 {top: 2px}
.top-3 {top: 3px}
.top-4 {top: 4px}
.top-5 {top: 5px}
.top-6 {top: 6px}
.top-7 {top: 7px}
.top-8 {top: 8px}
.top-9 {top: 9px}
.top-10 {top: 10px}

.bottom-1 {bottom: 1px}
.bottom-2 {bottom: 2px}
.bottom-3 {bottom: 3px}
.bottom-4 {bottom: 4px}
.bottom-5 {bottom: 5px}
.bottom-6 {bottom: 6px}
.bottom-7 {bottom: 7px}
.bottom-8 {bottom: 8px}
.bottom-9 {bottom: 9px}
.bottom-10 {bottom: 10px}

.right-1 {right: 1px}
.right-2 {right: 2px}
.right-3 {right: 3px}
.right-4 {right: 4px}
.right-5 {right: 5px}
.right-6 {right: 6px}
.right-7 {right: 7px}
.right-8 {right: 8px}
.right-9 {right: 9px}
.right-10 {right: 10px}

.left-1 {left: 1px}
.left-2 {left: 2px}
.left-3 {left: 3px}
.left-4 {left: 4px}
.left-5 {left: 5px}
.left-6 {left: 6px}
.left-7 {left: 7px}
.left-8 {left: 8px}
.left-9 {left: 9px}
.left-10 {left: 10px}

.font-22-s {
  font-size: 22px;
  line-height: 19px;
  letter-spacing: .75px;
}

.font-22 {
  font-size: 22px;
}

.font-20 {
  font-size: 20px;
}

.font-19 {
  font-size: 19px;
}

.font-18 {
  font-size: 18px;
}

.font-17 {
  font-size: 17px;
}

.nowrap {
  white-space: nowrap;
}

.white {
  color: white;
}

.bold {
  font-weight: bold;
}

.link {
  cursor: pointer;
  text-decoration: underline;
}

.unbold {
  font-weight: normal;
}

.text-center, .center, .centered {
  text-align: center;
}

.shadow-none {
  box-shadow: none !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.m-6 {
  margin: 6rem !important;
}

.mt-6,
.my-6 {
  margin-top: 6rem !important;
}

.mr-6,
.mx-6 {
  margin-right: 6rem !important;
}

.mb-6,
.my-6 {
  margin-bottom: 6rem !important;
}

.ml-6,
.mx-6 {
  margin-left: 6rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}



.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.inline-half-left {
  display: inline-block;
  max-width: 49%;
}

.inline-half-right {
  display: inline-block;
  max-width: 49%;
  margin-left: 2%;
}

`;

export default GlobalStyle;
