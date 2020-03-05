import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import TableToGame from "./components/TableToGame";
import { newGame } from "./singlePlayerActions";
import { useDispatch, useSelector } from "react-redux";
import { winningConditions } from "constants/singlePlayerConst";

export default function SinglePlayer({ match }) {
  const dataTable = useSelector(state => state.singePlayerReducer);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (!winner) {
      winningConditions.forEach(tabOfWinningCond => {
        const firstCond = dataTable[tabOfWinningCond[0]];
        const secondCond = dataTable[tabOfWinningCond[1]];
        const thirdCond = dataTable[tabOfWinningCond[2]];
        if (
          firstCond === secondCond &&
          secondCond === thirdCond &&
          firstCond !== null
        ) {
          firstCond === "x" ? setWinner("player 1") : setWinner("player 2");
          return;
        }
      });
    }
    if (winner) {
      alert(`${winner} won `);
      setWinner("");
      return;
    }
    if (!dataTable.includes(null) && !winner) {
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
