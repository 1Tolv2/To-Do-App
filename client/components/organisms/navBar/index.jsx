import React from "react";
import Link from "next/link";
import { MainButton } from "../../atoms/mainButton";
import * as s from "./styles";

export const NavBar = () => {
  return (
    <s.NavContainer>
      <s.List>
        <s.ListItem>
          <img src="/lock-svgrepo-com.svg" />
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </s.ListItem>
        <s.ListItem>
          <img src="/lock-svgrepo-com.svg" />
          <Link href="/">
            <a>Projects</a>
          </Link>
        </s.ListItem>
        <s.ListItem>
          <img src="/lock-svgrepo-com.svg" />
          <Link href="/">
            <a>Tasks</a>
          </Link>
        </s.ListItem>
      </s.List>
      <MainButton type="inverted" bgColor="orangeMain" fullWidth>
        Log out
      </MainButton>
    </s.NavContainer>
  );
};
