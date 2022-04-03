import React from "react";
import * as s from "./styles";

import { ColoredBox } from "../../molecules/coloredBox";

export const ColoredBoxList = () => {
  return (
    <s.Container>
      <s.ListBox>
        <ul>
          <li>
            <ColoredBox></ColoredBox>
          </li>
          <li>
            <ColoredBox></ColoredBox>
          </li>
          <li>
            <ColoredBox></ColoredBox>
          </li>
          <li>
            <ColoredBox></ColoredBox>
          </li>
          <li>
          <ColoredBox></ColoredBox>
        </li>
        </ul>
        <s.ListFade></s.ListFade>
      </s.ListBox>
        <ColoredBox type="addBox"></ColoredBox>
    </s.Container>
  );
};
