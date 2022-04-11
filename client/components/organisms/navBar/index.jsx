import React, { useState } from "react";
import Link from "next/link";
import { MainButton } from "../../atoms/mainButton";
import * as s from "./styles";
import Image from "next/image";

export const NavBar = ({state}) => {
const {newTaskModal, setNewTaskModal} = state
function toggleTaskModal() {
  setNewTaskModal(!newTaskModal)
}
  return (
    <s.NavContainer>
      <s.List>
        <s.ListItem>
          <Image height="50" width="50" src="/lock-svgrepo-com.svg" />
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </s.ListItem>
        <s.ListItem>
          <Image height="50" width="50" src="/lock-svgrepo-com.svg" />
          <Link href="/">
            <a>Tags</a>
          </Link>
        </s.ListItem>
        <s.ListItem>
          <Image height="50" width="50" src="/lock-svgrepo-com.svg" />
          <Link href="/">
            <a>Tasks</a>
          </Link>
        </s.ListItem>
      </s.List>
      <MainButton type="filled" bgColor="greenMain" fullWidth event={toggleTaskModal}>
        Add task
      </MainButton>
      <MainButton type="inverted" bgColor="orangeMain" fullWidth>
        Log out
      </MainButton>
    </s.NavContainer>
  );
};
