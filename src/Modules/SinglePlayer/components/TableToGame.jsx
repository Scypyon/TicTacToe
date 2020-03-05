import React, { useState, useEffect } from "react";
import { TableGame, Overflow } from "../singlePlayerStyles";
import { setPostion } from "../singlePlayerActions";
import { useDispatch, useSelector } from "react-redux";

export default function TableToGame() {
  const [player, changePlayer] = useState("x");
  const [overflow, setOverflow] = useState(false);
  const dataTable = useSelector(state => state.singePlayerReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (player === "o") {
      setTimeout(beginnerBot, 1000);
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
      <tr>
        <td onClick={() => move(0)}>{dataTable[0]}</td>
        <td onClick={() => move(1)} className="vert">
          {dataTable[1]}
        </td>
        <td onClick={() => move(2)}>{dataTable[2]}</td>
      </tr>
      <tr>
        <td onClick={() => move(3)} className="hori">
          {dataTable[3]}
        </td>
        <td onClick={() => move(4)} className="vert hori">
          {dataTable[4]}
        </td>
        <td onClick={() => move(5)} className="hori">
          {dataTable[5]}
        </td>
      </tr>
      <tr>
        <td onClick={() => move(6)}>{dataTable[6]}</td>
        <td onClick={() => move(7)} className="vert">
          {dataTable[7]}
        </td>
        <td onClick={() => move(8)}>{dataTable[8]}</td>
      </tr>
    </TableGame>
  );
}
