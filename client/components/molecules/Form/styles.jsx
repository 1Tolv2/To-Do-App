import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  label {
    width: 80%;
    text-align: left;
  }
`;

const InputContainer = styled.div`
position: relative;
width: 100%;
img{
  position: absolute;
  top: 20px;
  right: 60px;
  width: 25px;
}
`

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  border-radius: 7px;
  font-size: 1.1em;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 80%;
  margin: 30px 0;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1em;
  font-weight: 600;
  text-transform: uppercase;
`;

export { Form, InputContainer, Input, Button };
