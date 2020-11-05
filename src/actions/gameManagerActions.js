import { START_GAME, TOGGLE_PLAYER_TURN, ADD_TILE_SYMBOL, ENDING_GAME, BACK_PRESSED } from "./types";

export const startGameAction = (mode) => (dispatch) => {
  dispatch({ type: START_GAME, payload: mode });
};

export const togglePlayerTurnAction = (turn) => (dispatch) => {
  dispatch({ type: TOGGLE_PLAYER_TURN, payload: turn });
};

export const addTileSymbolAction = (myIndex, tileSymbol) => (dispatch) => {
  dispatch({ type: ADD_TILE_SYMBOL, payload: { myIndex, tileSymbol } });
};

export const endingGameAction = (winner) => dispatch => {
  dispatch({ type: ENDING_GAME, payload: winner })
}

export const backButtonAction = () => dispatch => {
  dispatch({ type: BACK_PRESSED })
}