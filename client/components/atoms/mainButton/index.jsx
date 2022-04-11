import React from "react";
import * as s from "./styles";

export const MainButton = ({ type, children, fullWidth, bgColor, event }) => {
  return (
    <>
      {type === "round" ? (
        <s.RoundButton bgColor={bgColor} fullWidth={fullWidth} onClick={event}>
          {children}
        </s.RoundButton>
      ) : type === "inverted" ? (
        <s.InvertedButton bgColor={bgColor} fullWidth={fullWidth} onClick={event}>
          {children}
        </s.InvertedButton>
      ) : (
        <s.Button bgColor={bgColor} fullWidth={fullWidth} onClick={event}>
          {children}
        </s.Button>
      )}
    </>
  );
};
