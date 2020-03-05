import { createStore, combineReducers } from "redux";
import { singePlayerReducer } from "Modules/SinglePlayer/singlePlayerReducer";

export const configureStore = () => {
  return createStore(
    combineReducers({ singePlayerReducer: singePlayerReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
