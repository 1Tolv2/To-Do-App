import React from "react";
import Link from 'next/link'
import * as s from "./styles";
import {MainButton} from '../../atoms/mainButton'

export const ColoredBox = ({ type, title, href }) => {
  return (
    <>
      {type === "addBox" ? (
        <s.Container className={type}>
          <h4>Add project</h4>
          <MainButton type="round">+</MainButton>
        </s.Container>
      ) : (
        <Link href="/"><a><s.Container bgColor="white">
            <h4>Project Title</h4>
            <p>x task remaining</p>
        </s.Container></a></Link>
      )}
    </>
  );
};
