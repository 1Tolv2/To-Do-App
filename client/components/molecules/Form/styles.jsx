import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  label {
    width: 80%;
    text-align: left;
  }
`;

const InputContainer = styled.div`
position: relative;
width: 100%;
background-color: #e6e6e6;
border-radius: 7px;
margin: 10px 0;
padding: 10px 0 10px 10px;

img{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
}
`

const Input = styled.input`
  width: 80%;
  border: none;
  background-color: transparent;
  color: black;
  font-size: 1.1em;
  :focus {
    outline: none;
  }
`;

export { Form, InputContainer, Input };
