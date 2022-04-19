import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "./_app";
import { MainLayout } from "../components/layouts/mainLayout";
import { NavBar } from "../components/organisms/navBar";
import { ColoredBoxList } from "../components/organisms/coloredBoxList";
import { TaskList } from "../components/organisms/taskList";
import TaskModal from "../components/organisms/taskModal";
import { fetchUser } from "../components/API";

export default function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const [newTaskModal, setNewTaskModal] = useState(false);

  const getUser = async () => {
    return setUserData((await fetchUser()).data[0]);
  };

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("jwttoken");
    token ? getUser() : router.push("/login");
  }, []);
  return (
    <MainLayout>
      <NavBar state={{ newTaskModal, setNewTaskModal }}></NavBar>
      <div>
        <h1>Welcome back!</h1>
        <main>
          <h2>My Tags</h2>
          <ColoredBoxList></ColoredBoxList>
          <TaskList></TaskList>
          {newTaskModal && (
            <TaskModal state={{ newTaskModal, setNewTaskModal }} />
          )}
        </main>
      </div>
      <aside>SideSection</aside>
    </MainLayout>
  );
}
