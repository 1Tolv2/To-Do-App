import React from "react";
import * as s from "./styles";

export const MainButton = ({ type, children, fullWidth, bgColor }) => {
  return (
    <>
      {type === "round" ? (
        <s.RoundButton bgColor={bgColor} fullWidth={fullWidth}>
          {children}
        </s.RoundButton>
      ) : (
        <s.Button bgColor={bgColor} fullWidth={fullWidth}>
          {children}
        </s.Button>
      )}
    </>
  );
};
