import React, { useContext, useEffect, useState } from "react";
import { TagContext } from "../../../pages/_app";
import { fetchAllTags } from "../../API";
import { TaskContext } from "../../../pages/_app";
import { ColoredBox } from "../../molecules/coloredBox";
import { TagModal } from "../tagModal";
import * as s from "./styles";

export const ColoredBoxList = () => {
  const { taskData, setTaskData } = useContext(TaskContext);
  const {tagData, setTagData} = useContext(TagContext);
  // const [tagsData, setTagsData] = useState(null);
  const [displayTagModal, setDisplayTagModal] = useState(false);

  async function getAllTags() {
    const { data } = await fetchAllTags();
    setTagData(data);
  }

  useEffect(() => {
    getAllTags();
  }, [displayTagModal]);

  return (
    <>
      <s.Container>
        <s.ListContainer>
          <ul>
            {tagData &&
              taskData &&
              tagData.map((tag, index) => {
                return (
                  <ColoredBox
                    key={index}
                    taskData={taskData.filter(
                      (item) => item.tags.includes(tag.tagName) && !item.done
                    )}
                    tagData={tag}
                  ></ColoredBox>
                );
              })}
          </ul>
          <s.ListFade></s.ListFade>
        </s.ListContainer>
        <ColoredBox
          type="addBox"
          event={() => setDisplayTagModal(true)}
        ></ColoredBox>
      </s.Container>
      {displayTagModal && <TagModal setModal={setDisplayTagModal} />}
    </>
  );
};
