import React from "react";
import { useParams } from "react-router-dom";

function PokemonInfo() {
    let { name } = useParams();

  return (
      <div>
      <h1>{name} </h1>

    </div>
  );
}

export default PokemonInfo;