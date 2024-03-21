import { useState, useEffect } from "react";

function CreatePokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div>
      {pokemonList.map((pokemon) => {
        return (
          <div className="flex flex-col items-center w-28 p-3 border-solid border-2">
            <div>
              <p className="w-full text-right">#{pokemon.id}</p>
              <div className="w-14 flex">
                <img
                  className="w-full"
                  src={pokemon.image}
                  alt={pokemon.name}
                />
              </div>
              <h2>{pokemon.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
    //   <p className="w-full text-right">#{pokemon.id}</p>
    //   <div className="w-14 flex">
    //     <img className="w-full" src={pokemon.image} alt={pokemon.name} />
    //   </div>
    //   <h2>{pokemon.name}</h2>
  );
}

export default CreatePokemon;
