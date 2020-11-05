import {
  START_GAME,
  TOGGLE_PLAYER_TURN,
  ADD_TILE_SYMBOL,
  ENDING_GAME,
  BACK_PRESSED,
} from "../actions/types";

const initialState = {
  textOnDisplay: "Player 1",
  isGameOver: false,
  playerTurn: true,
  isThereAWinner: false,
  theWinnerName: "",
  startGame: false,
  backButtonPressed: false,
  mode: "Player vs Player",
  theNineTiles: [
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: false,
      borderBottom: true,
      borderLeft: false,
      borderRight: true,
    },
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: false,
      borderBottom: true,
      borderLeft: false,
      borderRight: true,
    },
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: false,
      borderBottom: true,
      borderLeft: false,
      borderRight: false,
    },
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: false,
      borderBottom: false,
      borderLeft: false,
      borderRight: true,
    },
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: false,
      borderBottom: false,
      borderLeft: false,
      borderRight: true,
    },
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: false,
      borderBottom: false,
      borderLeft: false,
      borderRight: false,
    },
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: true,
      borderBottom: false,
      borderLeft: false,
      borderRight: true,
    },
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: true,
      borderBottom: false,
      borderLeft: false,
      borderRight: true,
    },
    {
      tileSymbol: "",
      bgColor: "",
      borderTop: true,
      borderBottom: false,
      borderLeft: false,
      borderRight: false,
    },
  ],
};

export default function (state = initialState, action) {
  const resetingBoard = () => {
    let tempBoard = state.theNineTiles;
    for (let j = 0; j < tempBoard.length; j++) {
      tempBoard[j].tileSymbol = "";
      tempBoard[j].bgColor = "";
    }
    return tempBoard;
  };

  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        textOnDisplay: "Player 1",
        mode: action.payload,
        startGame: true,
        isGameOver: false,
        backButtonPressed: false,
        playerTurn: true,
        theNineTiles: resetingBoard(),
        isThereAWinner: false,
      };
    case ENDING_GAME:
      let fds;

      if (action.payload === "X") {
        fds = "Player 1";
      } else {
        if (state.mode === "Player vs Player") {
          fds = "Player 2";
        } else {
          fds = "Computer";
        }
      }

      return {
        ...state,
        isGameOver: true,
        theWinnerName:
          action.payload === "X"
            ? "Player 1"
            : state.mode === "Player vs Player"
            ? "Player 2"
            : "Computer",
        textOnDisplay: fds + " wins",
        isThereAWinner: true,
      };
    case BACK_PRESSED:
      //reset the game

      return {
        ...state,
        backButtonPressed: true,
        startGame: false,
        theNineTiles: resetingBoard(),
      };

    case TOGGLE_PLAYER_TURN:
      return {
        ...state,
        playerTurn: action.payload,
        textOnDisplay: state.playerTurn
          ? state.mode === "Player vs Player"
            ? "Player 2"
            : "Computer"
          : "Player 1",
      };

    case ADD_TILE_SYMBOL:
      let tempArr = state.theNineTiles;
      if (!state.isGameOver) {
        for (let i = 0; i < tempArr.length; i++) {
          if (action.payload.myIndex === i) {
            tempArr[i].tileSymbol = action.payload.tileSymbol;
          }
        }
      }
      return {
        ...state,
        theNineTiles: tempArr,
      };

    default:
      return state;
  }
}
