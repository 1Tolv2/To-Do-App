import styled from "styled-components";

const Button = styled.button`
  width: ${props => props.fullWidth ? "100%" : "fit-content"};
  margin: 30px 0;
  padding: 10px;
  border: none;
  border-radius: 25px;
  font-size: 1.1em;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#23CE6B")};
  color: white;
`;
export { Button };
