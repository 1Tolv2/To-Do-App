import React, { useContext, useEffect, useState } from "react";
import {useRouter} from 'next/router'
import Image from "next/image";
import * as s from "./styles";
import { fetchTasks, toggleTaskStatus } from "../../API";
import Task from "../../molecules/task";
import { TaskContext } from "../../../pages/_app";

export const TaskList = () => {
  const { taskData, setTaskData } = useContext(TaskContext);
  const router = useRouter()
  const [isDetailedList, setIsDetailedList] = useState(false);
  const [taskList, setTaskList] = useState(null)
  const [displayDone, setDisplayDone] = useState(false);


  useEffect(async () => {
    const token = localStorage.getItem("jwttoken");
    if (!token) {
      router.push("/login");
    } else {
    const {data} = await fetchTasks(token);
    setTaskData(data)
    setTaskList(data)}
  }, []);

  useEffect(() => {
router.query.tag && taskList && setTaskList(taskData.filter((item)=>item.tags.includes(router.query.tag)))
  }, [router.query.tag])

  const toggleMenuType = () => {
    setIsDetailedList(!isDetailedList);
  };

  const toggleDisplayDone = () => {
    setDisplayDone(!displayDone);
  }

  const toggleStatus = async(e) => {
  const res = await toggleTaskStatus(e.target.id)
  res.ok && router.reload(window.location.pathname)
  }
  return (
    <s.Container>
      <s.TableHead>
        <div>
          <h3 className={displayDone ? "" : "active"} onClick={toggleDisplayDone}>To-Do</h3>
          <h3 className={displayDone ? "active" : ""} onClick={toggleDisplayDone}>Done</h3>
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
          {/* <label for="filters">Filter: </label> */}
          {/* <select name="filters" id="filters" placeholder="Filter">
            <option>filter 1</option>
            <option>filter 2</option>
          </select> */}
        </div>
      </s.TableHead>
      <s.List>
        <Task taskList={taskList} isDetailedList={isDetailedList} displayDone={displayDone} toggleStatus={toggleStatus}></Task>
      </s.List>
    </s.Container>
  );
};
