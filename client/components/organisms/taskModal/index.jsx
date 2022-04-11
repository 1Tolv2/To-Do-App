import React, { useState } from "react";
import InputField from "../../atoms/inputField";
import { MainButton } from "../../atoms/mainButton";
import { createTask } from '../../API'
import * as s from "./styles";
const TaskModal = ({ state }) => {
  const { newTaskModal, setNewTaskModal } = state;
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);


  async function handleOnSubmit(e) {
      e.preventDefault()
      const payload = {description, title, body}
      const data = await createTask(payload)
  }
  return (
    <s.Container>
      <s.Overlay></s.Overlay>
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
          ></textarea>
          <MainButton event={handleOnSubmit}>Add</MainButton>
        </form>
      </s.Modal>
    </s.Container>
  );
};

export default TaskModal;
