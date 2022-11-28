//import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App (props)  {
const userName="Dewayne";
 const abilities = ["Anticipation","Adaptability","Run-Away"];
 let date= new Date().toLocaleDateString();
  return (
    <div className="App">
      <header>
       <h1>Welcome to {userName}'s</h1>
       <Logo appName="Pokedex" />
      </header>
     <BestPokemon abilities = {abilities} pokemon = {"hello Pickachu"}  />
     <CaughtPokemon date ={date} />
     <PokemonMovesSelector />
     <PokemonCity />
    </div>
  );
}



export default App;
