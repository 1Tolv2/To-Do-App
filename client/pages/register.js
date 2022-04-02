import React from "react";
import { CenteredDivLayout } from "../components/layouts/centeredDivLayout";
import { RegisterForm } from "../components/organisms/registerForm";

export default function Register() {
  return (
    <CenteredDivLayout>
      <RegisterForm type="register"></RegisterForm>
    </CenteredDivLayout>
  );
}
