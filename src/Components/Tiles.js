import React from "react";

const Tiles = ({
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  myIndex,
  clickMe,
  bgColor,
  tileSymbol,
}) => {
  return (
    <div
      onClick={clickMe.bind(this, myIndex)}
      style={{
        width: 100 / 3 + "%",
        height: 100 / 3 + "%",
        boxSizing: "border-box",
        borderTop: borderTop ? "solid black 5px" : "",
        borderBottom: borderBottom ? "solid black 5px" : "",
        borderLeft: borderLeft ? "solid black 5px" : "",
        borderRight: borderRight ? "solid black 5px" : "",
        display: "grid",
        backgroundColor: bgColor ? bgColor : null,
        float: "left",
      }}
    >
      <h1
        style={{
          alignSelf: "center",
          justifySelf: "center",
          fontSize: "3em",
          fontFamily: "helvetica",
          fontWeight: "bold",
        }}
      >
        {tileSymbol}
      </h1>
    </div>
  );
};

export default Tiles;
