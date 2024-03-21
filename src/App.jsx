import { useEffect, useState } from "react";
import "./App.css";
import CreatePokemon from "./components/Pokemon.jsx";

function App() {
  // const [count, setCount] = useState(0)
  const pokemonTest = {
    id: 4,
    name: "Charmander",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  };

  return (
    <>
      <CreatePokemon/>
    </>
  );
}

export default App;
