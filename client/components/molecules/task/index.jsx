import React from "react";
import * as s from "./styles";

const Task = ({ taskList, isDetailedList, displayDone, toggleStatus }) => {
  const baseTask = (item) => {
    const date = item.createdAt.split("T")
    return (
      <>
        <s.InfoContainer>
          <h4>{item.title}</h4>
          <h5>{item.description}</h5>
        </s.InfoContainer>
        <s.TagContainer>
          {item.tags.length > 0 && item.tags.map((tag) => <li>{tag}</li>)}
        </s.TagContainer>
        <i>
          {date[0]}{" "}
          {date[1].split(".")[0]}
        </i>
        <input type="checkbox" id={item._id} onChange={toggleStatus} />
      </>
    );
  };

  const regularTask = (item) => {
    return (
      <s.Container id={item._id} key={item._id}>
        {baseTask(item)}
      </s.Container>
    );
  };

  const detailedTask = (item) => {
    return (
      <s.Container id={item._id} key={item._id}>
        {baseTask(item)}
        <p>{item.body}</p>
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

  return (<>
    {taskList &&
    taskList.map((item) =>
      displayDone ? finishedTasks(item) : toDoTasks(item)
    )}
  </>);
};

export default Task;
