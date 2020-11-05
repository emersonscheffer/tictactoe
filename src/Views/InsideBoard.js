import React from "react";
import Tiles from "../Components/Tiles";
import { useSelector, useDispatch } from "react-redux";
import {
  togglePlayerTurnAction,
  addTileSymbolAction,
  endingGameAction,
} from "../actions/gameManagerActions";

const InsideBoard = () => {
  const dispatch = useDispatch();
  const {
    theNineTiles,
    isThereAWinner,
    playerTurn,
    isGameOver,
    mode,
  } = useSelector((state) => state.gameManager);

  const clickMeLogic = (myIndex) => {
    if (!isThereAWinner) {
      let theSymbol;

      const nextTurn = () => {
        if (playerTurn) {
          theSymbol = "X";
          dispatch(togglePlayerTurnAction(!playerTurn));
        } else {
          theSymbol = "O";
          dispatch(togglePlayerTurnAction(!playerTurn));
        }
      };

      const makingChanges = () => {
        if (theNineTiles[myIndex].tileSymbol === "") {
          nextTurn();

          dispatch(addTileSymbolAction(myIndex, theSymbol));
        }
      };

      if (!isGameOver) {
        makingChanges();
        let resultGO = checkingIfGameIsOver();
        if (!resultGO) {
          if (mode === "Player vs Computer") {
            if (!isGameOver) {
              setTimeout(() => {
                dumbAI();
              }, Math.random() * 4000);
            }
          }
        }
      }
    }
  };

  const dumbAI = () => {
    while (true) {
      let randyNumber = Math.floor(Math.random() * 9);
      if (theNineTiles[randyNumber].tileSymbol === "") {
        dispatch(addTileSymbolAction(randyNumber, "O"));

        dispatch(togglePlayerTurnAction(true));
        break;
      }
    }
  };

  const checkingIfGameIsOver = () => {
    for (let k = 0; k < 9; k++) {
      if (theNineTiles[k].tileSymbol === "") {
        return false;
      }
    }
    let resu = checkTheResults();
    dispatch(endingGameAction(resu));
    return true;
  };

  let winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];

  const checkTheResults = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      if (
        theNineTiles[winningCombinations[i][0]].tileSymbol !== "" ||
        theNineTiles[winningCombinations[i][1]].tileSymbol !== "" ||
        theNineTiles[winningCombinations[i][2]].tileSymbol !== ""
      ) {
        if (
          theNineTiles[winningCombinations[i][0]].tileSymbol ===
            theNineTiles[winningCombinations[i][1]].tileSymbol &&
          theNineTiles[winningCombinations[i][1]].tileSymbol ===
            theNineTiles[winningCombinations[i][2]].tileSymbol
        ) {
          theNineTiles[winningCombinations[i][0]].bgColor = "red";
          theNineTiles[winningCombinations[i][1]].bgColor = "red";
          theNineTiles[winningCombinations[i][2]].bgColor = "red";

          dispatch(
            endingGameAction(theNineTiles[winningCombinations[i][0]].tileSymbol)
          );
          return theNineTiles[winningCombinations[i][0]].tileSymbol;
        }
      }
    }
    return "Nobody";
  };

  const renderTiles = () => {
    let nineTiles = [];

    for (let i = 0; i < 9; i++) {
      nineTiles.push(
        <Tiles
          key={i}
          borderTop={theNineTiles[i].borderTop}
          borderBottom={theNineTiles[i].borderBottom}
          borderLeft={theNineTiles[i].borderLeft}
          borderRight={theNineTiles[i].borderRight}
          myIndex={i}
          clickMe={clickMeLogic}
          bgColor={theNineTiles[i].bgColor}
          tileSymbol={theNineTiles[i].tileSymbol}
        />
      );
    }

    if (!isThereAWinner) {
      checkTheResults();
    }

    return nineTiles;
  };

  return (
    <div
      style={{
        width: "92%",
        height: "92%",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {renderTiles()}
    </div>
  );
};

export default InsideBoard;
