import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import TableToGame from "./components/TableToGame";
import { newGame } from "./singlePlayerActions";
import { useDispatch, useSelector } from "react-redux";
import { winningConditions } from "constants/singlePlayerConst";

export default function SinglePlayer({ match }) {
  const dataTable = useSelector(state => state.singePlayerReducer);
  const [winner, setWinner] = useState(false);

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
      return;
    }
    if (!dataTable.includes(null)) {
      alert("draw");
      return;
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
