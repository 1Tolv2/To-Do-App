import React, { useContext, useEffect, useState } from "react";
import { TagContext, TaskContext } from "../../../pages/_app";
import { fetchAllTags } from "../../API";
import { ColoredBox } from "../../molecules/coloredBox";
import { TagModal } from "../tagModal";
import * as s from "./styles";

export const ColoredBoxList = () => {
  const { taskData } = useContext(TaskContext);
  const {tagData, setTagData} = useContext(TagContext);
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
