import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { TaskContext, TagContext } from "../../../pages/_app";
import InputField from "../../atoms/inputField";
import { MainButton } from "../../atoms/mainButton";
import { createTask, fetchTasks } from "../../API";
import * as s from "./styles";

const TaskModal = ({ state }) => {
  const router = useRouter();
  const { setNewTaskModal } = state;
  const { setTaskData } = useContext(TaskContext);
  const { tagData } = useContext(TagContext);
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [tag, setTag] = useState(null);
  const [tagList, setTagList] = useState([])
  const [tagOption, setTagOption] = useState([])

useEffect(() => {
  setTagOption(tagData.map((tag) => tag.tagName))
},[])

  function handleAddTag(e) {
    e.preventDefault()
    tag && setTagList([...tagList, tag]);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { description, title, body, tagList };
    await createTask(payload);
    const { data } = await fetchTasks();
    setTaskData(data);
    setNewTaskModal(false);
    router.reload(window.location.pathname);
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
          <s.List>
            {tagList.map((tag) => {
              return (<li>{tag}</li>) })}
          </s.List>
          <label for="tag">Choose tags:</label>
          <s.Select id="tag" value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value={null}></option>
            {tagOption && tagOption.map((item) => {
            return (<option value={item}>{item}</option>)})
            }
          </s.Select>
          <MainButton event={handleAddTag}>Add</MainButton>
          <MainButton fullWidth event={handleOnSubmit}>
            Add
          </MainButton>
        </form>
      </s.Modal>
    </s.Container>
  );
};

export default TaskModal;
