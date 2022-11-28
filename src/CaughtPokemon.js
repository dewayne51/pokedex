import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  const counter = () => {
    // let pokemon = ["Charzard", "Pigeon", "Ditto"];
    // const index = Math.floor(Math.random() * pokemon.length);
    setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
        <input
          type="text"
          placeholder="Caught"
          value={pokemonNameInput}
          onChange={handleInputChange}
        />
        <button onClick={counter}>Click me</button>
      </p>
      <ul>
        {caught.map((pokemon, i) => (
          <h2 key={i}>{pokemon}</h2>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;