import React, { useState, useEffect } from "react";


function PokemonMoves() {
    let [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then((res) => res.json())
        .then((data) => {
            setPokemonData(data);
        });
    }, []);

return (
      <div className="pokemon-data">
        {pokemonData ? (
          <div>
            <p>{pokemonData.name}'s moves:</p>
            <p>
              {pokemonData.moves.map((move, index) => {
                return <li key={index}>{move.move.name}</li>;
              })}
            </p>
          </div>
        ) : (
          "null"
        )}
      </div>
    );
  }

export default PokemonMoves;