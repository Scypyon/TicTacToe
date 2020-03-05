import React, { useState, useEffect } from "react";
import { TableGame, Overflow } from "../singlePlayerStyles";
import { setPostion } from "../singlePlayerActions";
import { useDispatch, useSelector } from "react-redux";

export default function TableToGame() {
  const [player, changePlayer] = useState(1);
  const [overflow, setOverflow] = useState(false);
  const dataTable = useSelector(state => state.singePlayerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (player === 2) {
      setTimeout(beginnerBot, 1000);
    }
  }, [player]);

  const move = index => {
    if (dataTable[index] !== 0) {
      alert("To pole jest już zajęte");
      return;
    }
    dispatch(setPostion(index, player));
    if (player === 1) {
      changePlayer(2);
      setOverflow(true);
    }
  };

  const beginnerBot = () => {
    if (!dataTable.includes(0)) return;
    const randomNumber = Math.floor(Math.random() * 9);
    if (dataTable[randomNumber] === 0) {
      dispatch(setPostion(randomNumber, player));
      changePlayer(1);
      setOverflow(false);
    } else beginnerBot();
  };

  return (
    <TableGame>
      {overflow && <Overflow />}
      <tr>
        <td onClick={() => move(0)}>
          {dataTable[0] === 1 ? "x" : dataTable[0] !== 0 ? "o" : ""}
        </td>
        <td onClick={() => move(1)} className="vert">
          {dataTable[1] === 1 ? "x" : dataTable[1] !== 0 ? "o" : ""}
        </td>
        <td onClick={() => move(2)}>
          {dataTable[2] === 1 ? "x" : dataTable[2] !== 0 ? "o" : ""}
        </td>
      </tr>
      <tr>
        <td onClick={() => move(3)} className="hori">
          {dataTable[3] === 1 ? "x" : dataTable[3] !== 0 ? "o" : ""}
        </td>
        <td onClick={() => move(4)} className="vert hori">
          {dataTable[4] === 1 ? "x" : dataTable[4] !== 0 ? "o" : ""}
        </td>
        <td onClick={() => move(5)} className="hori">
          {dataTable[5] === 1 ? "x" : dataTable[5] !== 0 ? "o" : ""}
        </td>
      </tr>
      <tr>
        <td onClick={() => move(6)}>
          {dataTable[6] === 1 ? "x" : dataTable[6] !== 0 ? "o" : ""}
        </td>
        <td onClick={() => move(7)} className="vert">
          {dataTable[7] === 1 ? "x" : dataTable[7] !== 0 ? "o" : ""}
        </td>
        <td onClick={() => move(8)}>
          {dataTable[8] === 1 ? "x" : dataTable[8] !== 0 ? "o" : ""}
        </td>
      </tr>
    </TableGame>
  );
}
