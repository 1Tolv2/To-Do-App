import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/layouts/mainLayout";
import { ColoredBoxList } from "../../components/organisms/coloredBoxList";
import { TaskList } from "../../components/organisms/taskList";

export default function Login() {
  const router = useRouter();
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [param, setParam] = useState("");
  useEffect(() => {
    setParam(router.query.tag);
  }, [param]);
  return (
    <MainLayout state={{ newTaskModal, setNewTaskModal }}>
      <ColoredBoxList></ColoredBoxList>
      <h2>Tag: {router.query.tag}</h2>
      <TaskList></TaskList>
    </MainLayout>
  );
}
