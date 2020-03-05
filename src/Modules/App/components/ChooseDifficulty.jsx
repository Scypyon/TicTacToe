import React from "react";
import { ChooseSingleLvl, MainPage } from "../appStyles";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function ChooseDifficulty() {
  const history = useHistory();
  return (
    <MainPage>
      <Helmet>
        <title>Choose LvL</title>
      </Helmet>
      <h1>Choose LvL</h1>
      <ChooseSingleLvl>
        <Link to="game/beginner">Beginner</Link>
        <Link to="game/medium">Medium</Link>
        <Link to="game/immposible">Immposible to win</Link>
        <button onClick={() => history.go(-1)}>Back</button>
      </ChooseSingleLvl>
    </MainPage>
  );
}
