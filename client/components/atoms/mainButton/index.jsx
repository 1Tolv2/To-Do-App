import React from "react";
import * as s from "./styles";

export const MainButton = ({ type, children, fullWidth, bgColor }) => {
  return (
    <>
      {type === "round" ? (
        <s.RoundButton bgColor={bgColor} fullWidth={fullWidth}>
          {children}
        </s.RoundButton>
      ) : type === "inverted" ? (
        <s.InvertedButton bgColor={bgColor} fullWidth={fullWidth}>
          {children}
        </s.InvertedButton>
      ) : (
        <s.Button bgColor={bgColor} fullWidth={fullWidth}>
          {children}
        </s.Button>
      )}
    </>
  );
};
