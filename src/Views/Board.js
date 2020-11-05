import React from "react";
import InsideBoard from "./InsideBoard";

const Board = () => {
  return (
    <div
      style={{
        width: "280px",
        height: "280px",
        backgroundColor: "white",
        gridRow: "2/5",
        gridColumn: "2/5",
        alignSelf: "center",
        justifySelf: "center",
        boxSizing: "border-box",
        borderRadius: "7px",
        border: "solid 5px black",
        display: "grid",
      }}
    >
      <InsideBoard />
    </div>
  );
};
export default Board;
