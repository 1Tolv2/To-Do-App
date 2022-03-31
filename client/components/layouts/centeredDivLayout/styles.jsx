import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
body {
  background-color: black;
  color: white;
}
`

const Wrapper = styled.div`
background-color: #414143;
width: 100%;
max-width: 475px;
min-width: 320px;
height: 100%;
max-height: 900px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: White;
  overflow-y: hidden;
  h1 {
    font-weight: 300;
    font-size: 2.8em;
    top: -120px;
    left: 0;
  }
`;

const Container = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
`;

export {GlobalCSS, Wrapper, Container };
