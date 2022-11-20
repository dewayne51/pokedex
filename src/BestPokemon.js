import React from "react";

const BestPokemon = (props) => {
    //const pokemon = "pikachu";
   
  return (
    <div>
      <p>My favorite Pokemon is {props.pokemon}</p>
       <ul>
      {props.abilities.map((name, index) => (<li key={index}> {name} </li>) )}
    </ul>
    </div>
  );
};


export default BestPokemon;
