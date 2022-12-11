//import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import PokemonInfo from "./PokemonInfo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App ()  {
const userName="Dewayne";
 const abilities = ["Anticipation","Adaptability","Run-Away"];
 let date= new Date().toLocaleDateString();
  return (

    <div className="App">
      <header>
       <h1>Welcome to {userName}'s</h1>
       <Logo appName="Pokedex" />
      </header>
       <BrowserRouter>
       <Link to="src/BestPokemon.js">Best Pokemon</Link>
       <Link to="src/CaughtPokemon.js">Caught Pokemon</Link>
     <PokemonMovesSelector />
     <PokemonCity />
     <Routes> 
      <Route element={<BestPokemon abilities = {abilities} pokemon = {"hello Pickachu"}  />} path="src/BestPokemon.js" />
      <Route element={<CaughtPokemon date ={date} />} path="src/CaughtPokemon.js" />
      <Route path="/pokemon/:name" element={<PokemonInfo />} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
