import React, { useState } from "react";
import Form from "../../molecules/Form";
import * as s from "./styles";

export default function LoginTabs() {
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);

  function handleOnClick(e) {
    console.log(e.target.id);
    e.target.id === "signIn" && setSignIn(!signIn) && setRegister(false);
    e.target.id === "register" && setRegister(!register) && setSignIn(false);
    console.log(signIn);
  }
  return (
    <s.Container>
      <s.LeftTab bgColor="#00e6e6" className={signIn ? "open" : ""}>
        <s.Tab onClick={handleOnClick} bgColor="#00e6e6" id="signIn"></s.Tab>
        <s.TabTitle>Log in</s.TabTitle>
        <s.Section bgColor="#00e6e6">
        <Form text="Log in" bgColor="#00e6e6"></Form>

        </s.Section>
      </s.LeftTab>
      <s.RightTab className={register ? "open" : ""} bgColor="#c44dff">
        <s.Tab bgColor="#c44dff" onClick={handleOnClick} id="register"></s.Tab>
        <s.TabTitle>Register</s.TabTitle>
        <s.Section bgColor="#c44dff">
          <Form text="Register" bgColor="#c44dff"></Form>
        </s.Section>
      </s.RightTab>
    </s.Container>
  );
}
