import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { theme } from "../../../styles";

const {breakpoints} = theme
const GlobalCSS = createGlobalStyle`
body {
  background-color: #AD7A99;
  color: black;
}
`;

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
width: 100%;
max-width: 1440px;
margin: auto;
display: flex;
flex-direction: column;
${breakpoints.laptop}{
display: grid;
grid-template-columns: 40% 60%;
}
`;

const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
min-height: 500px; 
border-radius: 0 0 20px 20px;
padding: 40px 20px;
background-color: white;
${breakpoints.laptop}{
border-radius: 0 20px 20px 0;
}
${breakpoints.laptopL} {
border-radius: 20px;
}
`;
const ImageContainer = styled.div`
width: 100%;
height: 100%;
`;

export { GlobalCSS, Wrapper, Container,ImageContainer };
