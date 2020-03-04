import { createStore, combineReducers } from "redux";
import { appReducer } from "Modules/App/appReducer";

export const configureStore = () => {
  return createStore(
    combineReducers({
      appReducer: appReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
