import styled from "styled-components";

const Container = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`
const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: black;
opacity: 0.5;
z-index: 3;
`

const Modal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 500px;
height: 500px;
background-color: white;
border-radius: 5px;
padding: 20px;
z-index: 4;
textarea {
  width: 100%;
  height: 200px;
  background-color: #e6e6e6;
  border-radius: 7px;
  margin: 10px 0;
  padding: 10px 0 10px 10px;
  border: none;
  color: black;
  font-size: 1.1em;
  resize: none;
  :focus {
    outline: none;
  }
}
`

export {Container, Overlay, Modal}