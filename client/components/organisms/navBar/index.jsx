import React, { useState } from "react";
import {useRouter} from 'next/router'
import Link from "next/link";
import {logOutUser} from '../../API'
import { MainButton } from "../../atoms/mainButton";
import EditModal from "../EditModal";
import * as s from "./styles";

export const NavBar = ({state}) => {
  const [editModal, setEditModal] = useState(false);
  const router = useRouter()
const {newTaskModal, setNewTaskModal} = state
function toggleTaskModal() {
  setNewTaskModal(!newTaskModal)
}
async function handleLogOut() {
  const res = await logOutUser()
  if (res.ok) {
    localStorage.removeItem("jwttoken");
    router.push("/login");
  }
}

  return (
    <s.NavContainer>
      {editModal && <EditModal modal={{editModal, setEditModal}}></EditModal>}
      <s.List>
        <s.ListItem>
          <img src="/person-fill-svgrepo-com.svg" />
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </s.ListItem>
      </s.List>
      <MainButton type="filled" bgColor="greenMain" fullWidth event={toggleTaskModal}>
        Add task
      </MainButton>
      <MainButton type="inverted" bgColor="orangeMain" fullWidth event={handleLogOut}>
        Log out
      </MainButton>
    </s.NavContainer>
  );
};
