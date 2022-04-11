import React from "react";

const Task = ({ taskList, isDetailedList }) => {
  console.log(taskList);
  const regularTask = (item) => {
    console.log(item);
    return (
      <li>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </li>
    );
  };

  const detailedTask = (item) => {
    return (
      <li>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.body}</p>
      </li>
    );
  };
  return (
    taskList &&
    taskList.map((item) => isDetailedList ? detailedTask(item) : regularTask(item)
    )
  );
};

export default Task;
