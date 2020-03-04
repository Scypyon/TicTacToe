import React from "react";
import { Buttons } from "../appStyles";
import { Link } from "react-router-dom";
import { routes } from "routes.js";

export default function ChooseMode() {
  return (
    <Buttons>
      <Link to={routes.DIFFICULTY}>Single Player</Link>
      <Link to="#">Multi Player</Link>
    </Buttons>
  );
}
