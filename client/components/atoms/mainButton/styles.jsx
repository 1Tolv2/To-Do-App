import styled from "styled-components";
import { theme } from "../../../styles";

const Button = styled.button`
  width: ${props => props.fullWidth ? "100%" : "fit-content"};
  margin: 30px 0;
  padding: 10px;
  border: none;
  border-radius: 25px;
  font-size: 1.1em;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : theme.colors.greenMain)};
  color: white;
  cursor: pointer;
`;

const RoundButton = styled.button`
width: 40px;
height: 40px;
margin: auto;
border-radius: 25px;
font-size: 1.8em;
padding-bottom: 3px;
border: none;
background-color: white;
cursor: pointer;
`
export { Button, RoundButton };
