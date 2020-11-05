import React from "react";

const EndStartButton = ({ btnLogic, bText }) => {
  return (
    <div
      onClick={btnLogic.bind(this, bText)}
      style={{
        backgroundColor: "red",
        border: "solid 5px black",
        borderRadius: "10px",
        boxSizing: "border-box",
        height: "45px",
        width: "80px",
        

        display: "grid",
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: "bold",
          alignSelf: "center",
          justifySelf: "center",
          fontFamily: "helvetica",
        }}
      >
        {bText}
      </h1>
    </div>
  );
};

export default EndStartButton;
