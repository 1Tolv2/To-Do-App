import styled, { css } from "styled-components";
import { theme } from "../../../styles";

const BaseButton = css`
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  margin: 30px 0;
  padding: 10px;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 25px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Button = styled.button`
  ${BaseButton}
  border: none;
  background-color: ${({ bgColor }) =>
    bgColor ? theme.colors[bgColor] : theme.colors.greenMain};
  color: white;
`;

const InvertedButton = styled.button`
  ${BaseButton}
  background-color: transparent;
  color: ${({ bgColor }) =>
    bgColor ? theme.colors[bgColor] : theme.colors.greenMain};
  border: 2px solid
    ${({ bgColor }) =>
      bgColor ? theme.colors[bgColor] : theme.colors.greenMain};
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
`;
export { Button, RoundButton, InvertedButton };
