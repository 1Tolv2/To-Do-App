import styled, { createGlobalStyle } from "styled-components";
import { theme } from "../../../styles";

const {breakpoints} = theme

const GlobalCSS = createGlobalStyle`
body {
  background-color: ${theme.colors.mauveLight};
  color: black;
}
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 1440px;
margin: auto;
${breakpoints.tablet} {
display: grid;
gap: ${theme.blockMargins.small};
grid-template-columns: 200px auto 200px; }
`
export {GlobalCSS, Wrapper}