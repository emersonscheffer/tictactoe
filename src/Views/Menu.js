import React from "react";
import MyButton from "../Components/MyButton";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { startGameAction } from "../actions/gameManagerActions";

const Menu = () => {
  const dispatch = useDispatch();
  const { startGame } = useSelector((state) => state.gameManager);

  const btnLogic = (btn) => {
    console.log(btn);
    dispatch(startGameAction(btn));
  };

  const redirectToGame = () => {
    if (startGame) {
      return <Redirect to="/game" />;
    }
  };

  return (
    <div
      style={{
        alignSelf: "center",
        justifySelf: "center",
        width: "600px",
        height: "400px",
        backgroundColor: "gray",
        display: "grid",
        gridTemplateRows: "repeat(3, 1fr)",
        gridTemplateColumns: "repeat(2, 1fr)",
        borderRadius: "10px",
      }}
    >
      {redirectToGame()}
      <h1
        style={{
          fontSize: "5em",
          fontWeight: "bold",
          fontFamily: "helvetica",
          gridRow: "1/3",
          gridColumn: "1/3",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        Play
      </h1>
      <div style={{ display: "grid" }}>
        <MyButton btnText="Player vs Player" logic={btnLogic} />
      </div>
      <div style={{ display: "grid" }}>
        <MyButton btnText="Player vs Computer" logic={btnLogic} />
      </div>
    </div>
  );
};

export default Menu;
