import React from "react";
import Link from "next/link";
import * as s from "./styles";
import {Form} from "../../molecules/Form";

export const RegisterForm = ({ type }) => {
  return (
    <s.Container>
      <h1>Welcome!</h1>
      <Form bgColor="greenMain" type={type}></Form>
      {type === "register" ? (
        <i>
          Already have an account? Click{" "}
          <Link href="/login">
            <a>here</a>
          </Link>{" "}
          to log in!
        </i>
      ) : (
        <i>
          Don't have an account yet? Click{" "}
          <Link href="/register">
            <a>here</a>
          </Link>{" "}
          to register!
        </i>
      )}
    </s.Container>
  );
};
