import React from "react";
import EndStartButton from "../Components/EndStartButton";
import Board from "./Board";
import DisplayShow from "./DisplayShow";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  backButtonAction,
  startGameAction,
} from "../actions/gameManagerActions";

const GameContainer = () => {
  const dispatch = useDispatch();
  const { backButtonPressed, textOnDisplay, mode } = useSelector(
    (state) => state.gameManager
  );

  const endStartBtnLogic = (btn) => {
    if (btn === "Back") {
      dispatch(backButtonAction());
    } else if (btn === "Restart") {
      dispatch(startGameAction(mode));
    }
  };

  const startOrBack = () => {
    if (backButtonPressed) {
      return <Redirect to="/" />;
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
        gridTemplateRows: "repeat(4, 1fr)",
        gridTemplateColumns: "repeat(5, 1fr)",
        borderRadius: "10px",
      }}
    >
      {startOrBack()}
      <DisplayShow text={textOnDisplay} />
      <Board />

      <div
        style={{
          gridRow: "3/4",
          gridColumn: "5/6",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        <EndStartButton bText={"Restart"} btnLogic={endStartBtnLogic} />
      </div>
      <div
        style={{
          gridRow: "4/5",
          gridColumn: "5/6",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        <EndStartButton bText={"Back"} btnLogic={endStartBtnLogic} />
      </div>
    </div>
  );
};

export default GameContainer;
