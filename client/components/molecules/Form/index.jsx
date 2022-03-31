import React, { useState, useEffect } from "react";
import * as s from "./styles";

export default function Form({ text, bgColor }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <s.Form>
        <label htmlFor="username">Username</label>
      <s.InputContainer>
          <s.Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
<img src="/person-fill-svgrepo-com.svg"/>
      </s.InputContainer>
        <label htmlFor="password">Password</label>
      <s.InputContainer>
          <s.Input type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
<img src="/key-svgrepo-com.svg"/>
      </s.InputContainer>

      <s.Button bgColor={bgColor}>{text}</s.Button>
    </s.Form>
  );
}
