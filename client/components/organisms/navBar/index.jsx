import React, { useState, useContext } from "react";
import {useRouter} from 'next/router'
import Link from "next/link";
import {UserContext} from '../../../pages/_app'
import {APIURL, logOutUser} from '../../API'
import { MainButton } from "../../atoms/mainButton";
import * as s from "./styles";
import Image from "next/image";
import EditModal from "../EditModal";

export const NavBar = ({state}) => {
  const [editModal, setEditModal] = useState(false);

  const {userData, setUserData} = useContext(UserContext);
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
async function editUser() {
  setEditModal(true)
}

userData && console.log(userData)
  return (
    <s.NavContainer>
      {editModal && <EditModal modal={{editModal, setEditModal}}></EditModal>}
      {userData && <div>
        <h2>{userData.username}</h2>
        <img src={`${APIURL}/${userData.image}`} />
        {userData.settings.name && <p>{userData.name}</p>}
        {userData.settings.email && <p>{userData.email}</p>}
        <MainButton type="inverted" event={editUser} fullWidth>Edit</MainButton>
      </div>}
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
      <MainButton type="inverted" bgColor="orangeMain" fullWidth event={handleLogOut}>
        Log out
      </MainButton>
    </s.NavContainer>
  );
};
