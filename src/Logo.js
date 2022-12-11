import React from "react";

function Logo (props)  {
  console.log(props);
  return (<div> <h1>{props.appName}</h1>; <img src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt = "pokemon"/> </div>);}
export default Logo;