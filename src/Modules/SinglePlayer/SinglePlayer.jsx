import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import TableToGame from "./components/TableToGame";
import { newGame } from "./singlePlayerActions";
import { useDispatch, useSelector } from "react-redux";

export default function SinglePlayer({ match }) {
  const dataTable = useSelector(state => state.singePlayerReducer);
  const [winner, setWinner] = useState(false);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  useEffect(() => {
    if (!winner) {
      winningConditions.forEach(tabOfWinningCond => {
        if (
          dataTable[tabOfWinningCond[0]] === "x" &&
          dataTable[tabOfWinningCond[1]] === "x" &&
          dataTable[tabOfWinningCond[2]] === "x"
        ) {
          setWinner("player 1");
          return;
        }
        if (
          dataTable[tabOfWinningCond[0]] === "o" &&
          dataTable[tabOfWinningCond[1]] === "o" &&
          dataTable[tabOfWinningCond[2]] === "o"
        ) {
          setWinner("player 2");
          return;
        }
      });
    }
    if (winner) {
      alert(`${winner} won `);
    } else if (!dataTable.includes(null)) {
      alert("draw");
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
