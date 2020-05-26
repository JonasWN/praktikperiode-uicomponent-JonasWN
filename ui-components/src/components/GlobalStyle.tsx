import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  box-sizing: inherit;
  -webkit-font-smoothing: auto;
  font-weight: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  -webkit-appearance: none;
  -moz-appearance: none;
}
html,
body {
padding: 0;
margin: 0;
line-height: 1.6;
font-size: 18px;
height: 100%;
width: 100%;
min-height: 100%;
overflow-x: hidden;
scroll-behavior: smooth;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background: #F1F7FD;
box-sizing: border-box;
}
a {
color: #0070f3;
text-decoration: none;
}
li{
  list-style:none
}
a:hover {
text-decoration: underline;
cursor: pointer;
}
img {
width: 100%;
height: auto;
display: block;
}
`

export default GlobalStyle
