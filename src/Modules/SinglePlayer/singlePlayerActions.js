import * as singlePlayerTypes from "./singlePlayerTypes";

export const setPostion = (index, value) => ({
  type: singlePlayerTypes.SET_POSITION,
  payload: { index, value }
});

export const newGame = () => ({
  type: singlePlayerTypes.CLEAR_TABLE
});
