import React, { useState } from "react";
import * as s from "./styles";

export default function FormBox() {
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);

  function handleOnClick(e) {
    console.log(e.target.id);
    e.target.id === "signIn" && setSignIn(!signIn) && setRegister(false);
    e.target.id === "register" && setRegister(!register) && setSignIn(false);
    console.log(signIn)
  }
  return (
    <s.Container>
      {/* <s.TabContainers> */}
        <s.LeftTab bgColor="#00e6e6" className={signIn ? "open" : ""}>
          <s.Tab onClick={handleOnClick} bgColor="#00e6e6" id="signIn">
            <s.TabTitle >Sign in</s.TabTitle>
          </s.Tab>
          <s.Section bgColor="#00e6e6"></s.Section>
        </s.LeftTab>
        <s.RightTab className={register ? "open" : ""} bgColor="#c44dff">
          <s.Tab bgColor="#c44dff" onClick={handleOnClick} id="register">
            <s.TabTitle >Register</s.TabTitle>
          </s.Tab>
          <s.Section bgColor="#c44dff"></s.Section>
        </s.RightTab>
      {/* </s.TabContainers> */}
      {/* <s.Form>SignIn</s.Form>
      <s.Form>Register</s.Form> */}
      {/* <s.Title>{title}</s.Title>
      <s.Form>
        <h3>Username:</h3> <s.Input type="text" />
        <h3>Password:</h3>
        <s.Input type="text" />
      </s.Form> */}
    </s.Container>
  );
}
