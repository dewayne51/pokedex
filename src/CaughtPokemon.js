import React, { useState } from "react";

function CaughtPokemon (props) {
console.log(useState);
const [caught, setCaught] = useState([]);
  let nameArray =[
    "Squirtle",
    "Pikachu",
    "Bulbasaur",
    "Charizard",
    "Geodude",

  ];

  function generateRandomName(){
    return Math.floor(Math.random() * 5);
  }
   function catchPokemon(){
      setCaught(caught.concat((nameArray[generateRandomName()])));
   }

  return (
    <div>
      <p>Caught {caught.length} Pokemon on {props.date}</p>
    <button onClick={catchPokemon}>Catch a Pokemon</button>
    <ul>
      {caught.map((item, index) =>{
        return <li key={index}>{item}</li>;
      })}
    </ul>
    </div>
    );
  };
export default CaughtPokemon;