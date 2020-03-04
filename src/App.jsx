import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const MainPage = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 5px;
  }
`;

function App() {
  return (
    <MainPage>
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <h1>Hello, choose mode</h1>
      <Buttons>
        <button>Single Player</button>
        <button>Multi Player</button>
      </Buttons>
    </MainPage>
  );
}

export default App;
