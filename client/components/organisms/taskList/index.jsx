import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import * as s from "./styles";
import { fetchTasks } from "../../API";
import Task from "../../molecules/task";
import { TaskContext } from "../../../pages/_app";

export const TaskList = () => {
  const { taskData, setTaskData } = useContext(TaskContext);
  const [isDetailedList, setIsDetailedList] = useState(false);

  useEffect(async () => {
    const data = await fetchTasks();
    setTaskData(data.data);
  }, []);

  const toggleMenuType = () => {
    setIsDetailedList(!isDetailedList);
  };
  return (
    <s.Container>
      <s.TableHead>
        <div>
          <h3 className="active">To-Do</h3>
          <h3>In Progress</h3>
          <h3>Done</h3>
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
          <select name="filters" id="filters" placeholder="Filter">
            <option>filter 1</option>
            <option>filter 2</option>
          </select>
        </div>
      </s.TableHead>
      <s.List>
        <Task taskList={taskData} isDetailedList={isDetailedList}></Task>
      </s.List>
    </s.Container>
  );
};
