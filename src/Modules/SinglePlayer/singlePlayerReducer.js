import * as singlePlayerTypes from "./singlePlayerTypes";
import produce from "immer";

const basicState = Array(9).fill(null);

export const singePlayerReducer = produce((state = basicState, action) => {
  switch (action.type) {
    case singlePlayerTypes.SET_POSITION:
      state[action.payload.index] = action.payload.value;
      return;
    case singlePlayerTypes.CLEAR_TABLE:
      state.forEach(el => (el = " "));
      return;
    default:
      return state;
  }
});
