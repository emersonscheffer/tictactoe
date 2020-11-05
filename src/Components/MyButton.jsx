import React from "react";

const MyButton = ({ btnText, logic }) => {
  return (
    <div
      onClick={logic.bind(this, btnText)}
      style={{
        border: "solid 5px black",
        borderRadius: "15px",
        backgroundColor: "white",
        color: "black",
        width: "200px",
        height: "70px",
        display: "grid",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      <h4
        style={{
          alignSelf: "center",
          justifySelf: "center",
          fontSize: "1.2em",
          fontWeight: "bold",
          fontFamily: "helvetica",
        }}
      >
        {btnText}
      </h4>
    </div>
  );
};

export default MyButton;
