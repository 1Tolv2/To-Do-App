import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../../pages/_app";
import * as API from "../../API";
import { MainButton } from "../../atoms/mainButton";
import { BodyRegularText } from "../../atoms/bodyRegularText/index";
import * as s from "./styles"

export const Form = ({ type, bgColor }) => {
  const {setUserData} = useContext(UserContext)
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleOnSubmit(e) {
    e.preventDefault();
    if (type === "register") {
      const res = await API.registerUser({ username, password });
      res.user ? router.push("login") : setErrorMessage("Username already taken, try another on")
    } else if (type === "logIn") {
      const {user, token} = await API.logInUser({ username, password });

      if (user) {
        localStorage.setItem("jwttoken", token)
        setUserData(user)
        router.push("/")
      } else setErrorMessage("Username or password is incorrect, please try again")
    }
  }

  return (
    <s.Form onSubmit={handleOnSubmit}>
      <label htmlFor="username">Username</label>
      <s.InputContainer>
        <s.Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <img src="/person-fill-svgrepo-com.svg" />
      </s.InputContainer>
      <label htmlFor="password">Password</label>
      <s.InputContainer>
        <s.Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <img src="/key-svgrepo-com.svg" />
      </s.InputContainer>
      {errorMessage && <BodyRegularText type="error">{errorMessage}</BodyRegularText>}

      <MainButton bgColor={bgColor} fullWidth>
        {type === "register" ? "Register" : "Log in"}
      </MainButton>
    </s.Form>
  );
}
