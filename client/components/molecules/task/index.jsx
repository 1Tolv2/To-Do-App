import React from "react";

const Task = ({ taskList, isDetailedList, displayDone }) => {
  const regularTask = (item) => {
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

  const finishedTasks = (item) => {
    if (item.done) {
     return isDetailedList ? detailedTask(item) : regularTask(item)} else {return}
  }
  const toDoTasks = (item) => {
    if (item.done) {
      return
    } else {
    return isDetailedList ? detailedTask(item) : regularTask(item)}
  }

  return (
    taskList &&
    taskList.map((item) => displayDone ? finishedTasks(item) : toDoTasks(item))
    // taskList.map((item) => isDetailedList ? detailedTask(item) : regularTask(item))
  );
};

export default Task;
