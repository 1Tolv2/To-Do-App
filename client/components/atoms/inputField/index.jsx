import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #e6e6e6;
  border-radius: 7px;
  margin: 10px 0;
  padding: 10px 0 10px 10px;

  img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
  }
`;

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
const InputField = ({ type, id, value, setValue, placeholder }) => {
  return (
    <InputContainer>
      <Input
        placeholder={placeholder}
        type={type ? type : "text"}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
};

export default InputField;
