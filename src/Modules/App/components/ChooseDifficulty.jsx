import React from "react";
import { ChooseSingleLvl, MainPage } from "../appStyles";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ChooseDifficulty() {
  const history = useHistory();
  return (
    <MainPage>
      <Helmet>
        <title>Choose LvL</title>
      </Helmet>
      <h1>Choose LvL</h1>
      <ChooseSingleLvl>
        <button>Beginner</button>
        <button>Medium</button>
        <button>Immposible to win</button>
        <button onClick={() => history.go(-1)}>Back</button>
      </ChooseSingleLvl>
    </MainPage>
  );
}
