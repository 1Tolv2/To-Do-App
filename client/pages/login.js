import React from "react";
import CenteredDivLayout from "../components/layouts/centeredDivLayout";
import LoginTabs from "../components/organisms/LoginTabs";
import "../styles/Home.module.css";

export default function Login() {
  return (
    <CenteredDivLayout>
      <LoginTabs></LoginTabs>
    </CenteredDivLayout>
  );
}
