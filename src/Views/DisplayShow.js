import React from "react";

const DisplayShow = ({ text }) => {
  return (
    <div
      style={{
        gridRow: "1/2",
        gridColumn: "2/5",
        display: "grid",
        width: "280px",
        height: "65px",
        alignSelf: "center",
        justifySelf: "center",
        backgroundColor: "white",
        border: "solid 5px black",
        borderRadius: "10px",
        boxSizing: "border-box"
      }}
    >
      <h1
        style={{
          alignSelf: "center",
          justifySelf: "center",
          fontSize: "2em",
          fontWeight: "bold",
          fontFamily: "helvetica",
        }}
      >
        {text}
      </h1>
    </div>
  );
};

export default DisplayShow;
