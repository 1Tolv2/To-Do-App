import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { TaskContext } from "../../../pages/_app";
import { fetchTasks, toggleTaskStatus } from "../../API";
import Task from "../../molecules/task";
import * as s from "./styles";
export const TaskList = () => {
  const router = useRouter();
  const { taskData, setTaskData } = useContext(TaskContext);
  const [isDetailedList, setIsDetailedList] = useState(false);
  const [taskList, setTaskList] = useState(null);
  const [displayDone, setDisplayDone] = useState(false);
  const [reload, setReload] = useState(false);

  const getTaskList = async () => {
    const { data } = await fetchTasks();
    return data;
  };

  useEffect(async () => {
    const token = localStorage.getItem("jwttoken");
    if (!token) {
      router.push("/login");
    } else {
      const data = await getTaskList();
      setTaskData(data);
      router.query.tag ? filterTaskList(data) : setTaskList(data);

    }
  }, [reload]);

  const filterTaskList = (data) => {
    return setTaskList(
      data.filter((item) => item.tags.includes(router.query.tag))
    );
  };

  useEffect(() => {
    router.query.tag && taskList && filterTaskList(taskData);
  }, [router.query.tag]);

  const toggleMenuType = () => {
    setIsDetailedList(!isDetailedList);
  };

  const toggleDisplayDone = () => {
    setDisplayDone(!displayDone);
  };

  const toggleStatus = async (e) => {
    const res = await toggleTaskStatus(e.target.id);
    res.ok && setReload(!reload);

  };
  return (
    <s.Container>
      <s.TableHead>
        <div>
          <h3
            className={displayDone ? "" : "active"}
            onClick={toggleDisplayDone}
          >
            To-Do
          </h3>
          <h3
            className={displayDone ? "active" : ""}
            onClick={toggleDisplayDone}
          >
            Done
          </h3>
        </div>
        <div>
          <div>
            <button
              className={isDetailedList ? "" : "active"}
              onClick={toggleMenuType}
            >
              <Image width="100" height="100" src="/menu-svgrepo-com.svg" />
            </button>
            <button
              className={isDetailedList ? "active" : ""}
              onClick={toggleMenuType}
            >
              <Image
                width="100"
                height="100"
                src="/detailed-menu-svgrepo-com.svg"
              />
            </button>
          </div>
        </div>
      </s.TableHead>
      <s.List>
        <Task
          taskList={taskList}
          isDetailedList={isDetailedList}
          displayDone={displayDone}
          toggleStatus={toggleStatus}
        ></Task>
      </s.List>
    </s.Container>
  );
};
