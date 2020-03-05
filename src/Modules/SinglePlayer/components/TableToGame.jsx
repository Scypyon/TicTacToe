import React, { useState, useEffect } from "react";
import { TableGame, Overflow, Field } from "../singlePlayerStyles";
import { setPostion } from "../singlePlayerActions";
import { useDispatch, useSelector } from "react-redux";

export default function TableToGame() {
  const [player, changePlayer] = useState("x");
  const [overflow, setOverflow] = useState(false);
  const dataTable = useSelector(state => state.singePlayerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (player === "o") {
      setTimeout(beginnerBot, 500);
    }
  }, [player]);

  const move = index => {
    if (dataTable[index] !== null) {
      alert("To pole jest już zajęte");
      return;
    }
    dispatch(setPostion(index, player));
    if (player === "x") {
      changePlayer("o");
      setOverflow(true);
    }
  };

  const beginnerBot = () => {
    if (!dataTable.includes(null)) return;
    const randomNumber = Math.floor(Math.random() * 9);
    if (dataTable[randomNumber] === null) {
      dispatch(setPostion(randomNumber, player));
      changePlayer("x");
      setOverflow(false);
    } else beginnerBot();
  };

  return (
    <TableGame>
      {overflow && <Overflow />}
      {dataTable.map((row, i) => (
        <Field onClick={() => move(i)}>{row}</Field>
      ))}
    </TableGame>
  );
}
