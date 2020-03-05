import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import TableToGame from "./components/TableToGame";
import { newGame } from "./singlePlayerActions";
import { useDispatch, useSelector } from "react-redux";

export default function SinglePlayer({ match }) {
  const dataTable = useSelector(state => state.singePlayerReducer);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      if (
        dataTable[i] === 1 &&
        dataTable[i + 1] === 1 &&
        dataTable[i + 2] === 1
      ) {
        alert("Player 1 win game !");
      }
      if (
        dataTable[i] === 1 &&
        dataTable[i + 3] === 1 &&
        dataTable[i + 6] === 1
      ) {
        alert("Player 1 win game !");
      }
      if (
        dataTable[i] === 2 &&
        dataTable[i + 1] === 2 &&
        dataTable[i + 2] === 2
      ) {
        alert("Player 2 win game !");
      }
      if (
        dataTable[i] === 2 &&
        dataTable[i + 3] === 2 &&
        dataTable[i + 6] === 2
      ) {
        alert("Player 2 win game !");
      }
    }
    if (dataTable[0] === 1 && dataTable[4] === 1 && dataTable[8] === 1) {
      alert("Player 1 win game !");
    }
    if (dataTable[2] === 1 && dataTable[4] === 1 && dataTable[6] === 1) {
      alert("Player 1 win game !");
    }
    if (dataTable[0] === 2 && dataTable[4] === 2 && dataTable[8] === 2) {
      alert("Player 2 win game !");
    }
    if (dataTable[2] === 2 && dataTable[4] === 2 && dataTable[6] === 2) {
      alert("Player 2 win game !");
    }
  }, [dataTable]);

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
