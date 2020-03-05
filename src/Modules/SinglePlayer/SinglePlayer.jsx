import React from "react";
import { Helmet } from "react-helmet";
import TableToGame from "./components/TableToGame";
import { newGame } from "./singlePlayerActions";
import { useDispatch } from "react-redux";

export default function SinglePlayer({ match }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Helmet>
        <title>Game in progress</title>
      </Helmet>
      <button onClick={() => dispatch(newGame())}>New Game</button>
      <TableToGame />
    </div>
  );
}
