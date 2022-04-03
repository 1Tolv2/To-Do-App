import styled from "styled-components";
import { theme } from "../../../styles/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 5px;
  padding: 15px 5px;
  text-align: center;
  color: white;
  background-color: ${({ bgColor }) =>
    bgColor ? theme.colors[bgColor] : theme.colors.mauveMain};
  margin-right: ${theme.blockMargins.small};
  p {
    margin: auto;
  }
  &.addBox {
    margin: 0;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  padding: 5px;
  margin: 0 auto;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: white;
  color: black;
  cursor: pointer;
  a {
    color: black;
  }
`;

export { Container, ButtonContainer };
