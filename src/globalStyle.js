import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    direction: ltr;
    font-family: 'Sora';
}
ul , ol {
    padding: 0;
    margin: 0;
    list-style: none;
}
*, *:after, *:before {
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
.container {
   width: 100%;
   padding: 0 15px;
}
.h-full {
    height: 100%;
}
.relative {
    position: relative;
}
.flex {
    display: flex;
}
.space-between {
    justify-content: space-between
}
.justify-center {
    justify-content: center
}
.flex-wrap {
    flex-wrap: wrap;
}
.align-center {
    align-items: center;
}
.gap-5 {
    gap: 5px
}
.gap-10 {
    gap: 10px
}
.gap-15 {
    gap: 15px
}
.gap-20 {
    gap: 20px;
}
.gap-40 {
    gap: 40px;
}
`;
