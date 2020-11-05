import { combineReducers } from "redux";

import gameManagerReducer from './gameManagerReducer'

export default combineReducers({
    gameManager: gameManagerReducer
});