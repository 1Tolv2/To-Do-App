import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import * as s from "./styles";
import { UserContext } from "../../../pages/_app";
import { registerUser, logInUser } from "../../API";
import { MainButton } from "../../atoms/mainButton";
import BodyRegularText from "../../atoms/bodyRegularText/styles";

export const Form = ({ type, bgColor }) => {
  const {setUserData} = useContext(UserContext)
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleOnSubmit(e) {
    e.preventDefault();
    if (type === "register") {
      const res = await registerUser({ username, password });
      console.log(res)
      res?.user
        ? router.push("login")
        : (setError("Username already taken, try another on"));
    } else if (type === "logIn") {
      const {user} = await logInUser({ username, password });
      console.log(user)

      if (user) {
        localStorage.setItem("jwttoken", user.token)
        setUserData(user)
        router.push("/")
      } else setError("Username or password is incorrect, please try again")
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
      {/* {console.log(error)} */}
      {/* {error && (<BodyRegularText type="error">"error"</BodyRegularText>)} */}
      <MainButton bgColor={bgColor} fullWidth>
        {type === "register" ? "Register" : "Log in"}
      </MainButton>
    </s.Form>
  );
}
