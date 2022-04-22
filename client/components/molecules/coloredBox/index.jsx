import React from "react";
import Link from 'next/link'
import * as s from "./styles";
import {MainButton} from '../../atoms/mainButton'

export const ColoredBox = ({ type, taskData, tagData }) => {
  console.log("DATA",taskData, tagData)
  return (
    <>
      {type === "addBox" ? (
        <s.Container className={type}>
          <h4>Add project</h4>
          <MainButton type="round">+</MainButton>
        </s.Container>
      ) : (
        <Link href={`/tags/${tagData}`}><a><s.Container bgColor="white">
            <h4>{tagData}</h4>
            <p>{taskData.length} task remaining</p>
        </s.Container></a></Link>
      )}
    </>
  );
};
