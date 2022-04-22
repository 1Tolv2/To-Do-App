import React, {useContext, useEffect, useState} from "react";
import { fetchAllTags } from "../../API";
import {TaskContext} from "../../../pages/_app"
import { ColoredBox } from "../../molecules/coloredBox";
import { TagModal } from '../tagModal'
import * as s from "./styles";

export const ColoredBoxList = () => {
  const {taskData, setTaskData} = useContext(TaskContext);
  const [tagsData, setTagsData] = useState(null);
  const [displayTagModal, setDisplayTagModal] = useState(false);

  async function getAllTags() {
    const {data} = await fetchAllTags()
    setTagsData(data)
  }

  useEffect(() => {
    getAllTags()
  }, [])

  return (
    <s.Container>
      <s.ListContainer>
        <ul>
          {tagsData && taskData && tagsData.map((tag, index) => { console.log(tag)
            return <ColoredBox key={index} taskData={taskData.filter((item)=>item.tags.includes(tag.tagName) && !item.done)} tagData={tag}></ColoredBox>
          })}
        </ul>
        <s.ListFade></s.ListFade>
      </s.ListContainer>
      <ColoredBox type="addBox" event={()=> setDisplayTagModal(true)}></ColoredBox>
      {displayTagModal && <TagModal state={setDisplayTagModal}/>}
    </s.Container>
  );
};
