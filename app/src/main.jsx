// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
select::-ms-expand {
    display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
   font-family: 'Metrophobic', sans-serif;
   box-sizing:border-box;
}
`

const theme = {
   colors: {
      primary: '#b1b3e2',
      secondary: '#1d112d',
      accent: '#7f4cbd',
      text: '#dde9f3',
      background: '#0e1b25',
   }
}

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <Global />
         <App />
      </ThemeProvider>
   </React.StrictMode>,
)
