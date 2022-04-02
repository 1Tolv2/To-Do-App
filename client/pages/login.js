import React, { useContext } from "react";
import { CenteredDivLayout } from "../components/layouts/centeredDivLayout";
import { RegisterForm } from "../components/organisms/registerForm";

export default function Login() {
  return (
    <CenteredDivLayout>
      <RegisterForm type="logIn"></RegisterForm>
    </CenteredDivLayout>
  );
}
