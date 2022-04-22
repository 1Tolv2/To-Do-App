import React, {useContext, useEffect, useState} from "react";
import { fetchAllTags } from "../../API";
import {TaskContext} from "../../../pages/_app"
import { ColoredBox } from "../../molecules/coloredBox";
import * as s from "./styles";

export const ColoredBoxList = () => {
  const [tagsData, setTagsData] = useState(null);
  const {taskData, setTaskData} = useContext(TaskContext);

  async function getAllTags() {
    const {data} = await fetchAllTags()
    console.log(data)
    setTagsData(data)
  }

  useEffect(() => {
    getAllTags()
  }, [])

  return (
    <s.Container>
      <s.ListContainer>
        <ul>
          {tagsData && taskData && tagsData.map((tag, index) => {
            return <ColoredBox key={index} taskData={taskData.filter((item)=>item.tags.includes(tag) && !item.done)} tagData={tag}></ColoredBox>
          })}
        </ul>
        <s.ListFade></s.ListFade>
      </s.ListContainer>
        <ColoredBox type="addBox"></ColoredBox> 
    </s.Container>
  );
};
