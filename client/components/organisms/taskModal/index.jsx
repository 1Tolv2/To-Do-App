import React, { useState, useContext } from "react";
import { TaskContext } from "../../../pages/_app";
import InputField from "../../atoms/inputField";
import { MainButton } from "../../atoms/mainButton";
import { createTask, fetchTasks } from '../../API'
import * as s from "./styles";

const TaskModal = ({ state }) => {
  const { setNewTaskModal } = state;
  const {setTaskData} = useContext(TaskContext)
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);


  async function handleOnSubmit(e) {
      e.preventDefault()
      const payload = {description, title, body}
      await createTask(payload)
      const {data} = await fetchTasks()
      setTaskData(data)
      setNewTaskModal(false)
  }
  return (
    <s.Container>
      <s.Overlay onClick={() => setNewTaskModal(false)}></s.Overlay>
      <s.Modal>
        <form>
          <InputField
            type="text"
            id="title"
            value={title}
            setValue={setTitle}
            placeholder="Title..."
          />
          <InputField
            type="text"
            id="description"
            value={description}
            setValue={setDescription}
            placeholder="Description..."
          />
          <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Detailed description..."
          ></textarea>
          <MainButton fullWidth event={handleOnSubmit}>Add</MainButton>
        </form>
      </s.Modal>
    </s.Container>
  );
};

export default TaskModal;
