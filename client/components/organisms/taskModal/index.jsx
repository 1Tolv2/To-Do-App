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
  const [tags, setTags] = useState(null);
  const [tagList, setTagList] = useState([])

useEffect(() => {
  setTagList(tagData)
},[])

  function handleAddTag() {
    setTagList([...tagList, tagName]);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { description, title, body, tagsList };
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
          {/* <InputField
            type="text"
            id="tag"
            value={tags}
            setValue={setTags}
            placeholder="Add tags by splitting with comma , ..."
          /> */}
          <s.List>
            {tagList.map((tag) => {return (<li>{tag.tagName}</li>) })}
          </s.List>
          <label for="tag">Choose tags:</label>
          <s.Select id="tag">
            {tagList && tagList.map((tag) => {
            return (<option value={tag.tagName}>{tag.tagName}</option>)})
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
