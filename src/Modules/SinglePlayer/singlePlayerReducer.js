import * as singlePlayerTypes from "./singlePlayerTypes";
import produce from "immer";

const basicState = Array.from({ length: 9 }, () => null);

export const singePlayerReducer = produce((state = basicState, action) => {
  switch (action.type) {
    case singlePlayerTypes.SET_POSITION:
      state[action.payload.index] = action.payload.value;
      return;
    case singlePlayerTypes.CLEAR_TABLE:
      return basicState;
    default:
      return state;
  }
});
