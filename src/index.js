import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Modules/App/App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { routes } from "./routes";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ChooseDifficulty from "Modules/App/components/ChooseDifficulty";
import SinglePlayer from "Modules/SinglePlayer/SinglePlayer";

const store = configureStore();

function NoMatch() {
  return <Redirect to={routes.CHOOSE_MODE} />;
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path={routes.CHOOSE_MODE} exac component={App} />
        <Route path={routes.DIFFICULTY} exac component={ChooseDifficulty} />
        <Route path={routes.GAME} component={SinglePlayer} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
