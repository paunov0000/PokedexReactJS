import { useEffect, useState } from "react";
import "./App.css";
import CreatePokemon from "./components/Pokemon.jsx";
import CreateNavbar from "./components/Navbar.jsx";

function App() {
  const [pokemonArr, setPokemonList] = useState(null);

  useEffect(() => {
    fetchData().then((pokemonList) => {
      setPokemonList(pokemonList);
    });
  }, []);

  if (!pokemonArr) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="bg-red-600 px-3 py-7">
        <CreateNavbar />
        <CreatePokemon pokemonArr={pokemonArr} />
      </div>
    </>
  );
}

async function fetchData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  const pokemonData = data.results.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return {
      id: data.id.toString().padStart(3, "0"),
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      image: data.sprites.front_default,
    };
  });

  const pokemonList = await Promise.all(pokemonData);
  return pokemonList;
}

export default App;
