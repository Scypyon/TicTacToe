import React from "react";
import { Helmet } from "react-helmet";
import { Buttons, MainPage } from "./appStyles";
import { chooseMode } from "./appActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <MainPage>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <h1>Hello, choose mode</h1>
      <Buttons>
        <button onClick={() => dispatch(chooseMode("single"))}>
          Single Player
        </button>
        <button onClick={() => dispatch(chooseMode("multi"))}>
          Multi Player
        </button>
      </Buttons>
    </MainPage>
  );
}

export default App;
