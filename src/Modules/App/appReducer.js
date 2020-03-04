import * as appTypes from "./appTypes";
import produce from "immer";

export const appReducer = produce(
  (state, action) => {
    switch (action.type) {
      case appTypes.CHOOSE_MODE:
        state.mode = action.payload;
        return;
    }
  },
  { mode: "" }
);
