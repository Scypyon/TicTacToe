import React from "react";
import { Helmet } from "react-helmet";
import { MainPage } from "./appStyles";
import ChooseMode from "./components/ChooseMode";

function App() {
  return (
    <MainPage>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <h1>Hello, choose mode</h1>
      <ChooseMode />
    </MainPage>
  );
}

export default App;
