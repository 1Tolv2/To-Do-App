import React from "react";
import Link from 'next/link'
import * as s from "./styles";
import {MainButton} from '../../atoms/mainButton'

export const ColoredBox = ({ type, taskData, tagData, event }) => {
  return (
    <>
      {type === "addBox" ? (
        <s.Container className={type}>
          <h4>Add tag</h4>
          <MainButton type="round" event={event}>+</MainButton>
        </s.Container>
      ) : (
        <Link href={`/tags/${tagData.tagName}`}><a><s.Container bgColor="white">
            <h4>{tagData.tagName}</h4>
            <p>{taskData.length} task remaining</p>
        </s.Container></a></Link>
      )}
    </>
  );
};
