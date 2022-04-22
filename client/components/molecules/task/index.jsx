import React from "react";
import * as s from "./styles";

const Task = ({ taskList, isDetailedList, displayDone, toggleStatus }) => {
  console.log(taskList)
  const regularTask = (item) => {
    return (
      <s.Container id={item._id} key={item._id}>
        <s.InfoContainer>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </s.InfoContainer>
        <input type="checkbox" id={item._id} onChange={toggleStatus} />
        <i>{item.createdAt.split("T")[0]} - {item.createdAt.split("T")[1].split(".")[0]}</i>
      </s.Container>
    );
  };

  const detailedTask = (item) => {
    return (
      <s.Container id={item._id} key={item._id}>
        <s.InfoContainer>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <p>{item.body}</p>
         
        </s.InfoContainer>
        {item.tags.length > 0 && <s.TagContainer>{
           item.tags.map((tag)=> <li>{tag}</li>)}</s.TagContainer>}
        <input type="checkbox" id={item._id} onChange={toggleStatus} />
      </s.Container>
    );
  };

  const finishedTasks = (item) => {
    if (item.done) {
      return isDetailedList ? detailedTask(item) : regularTask(item);
    } else {
      return;
    }
  };
  const toDoTasks = (item) => {
    if (item.done) {
      return;
    } else {
      return isDetailedList ? detailedTask(item) : regularTask(item);
    }
  };

  return (
    taskList &&
    taskList.map((item) =>
      displayDone ? finishedTasks(item) : toDoTasks(item)
    )
  );
};

export default Task;
