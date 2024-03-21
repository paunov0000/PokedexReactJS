import { useState, useEffect } from "react";

function CreatePokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        const pokemonData = data.results.map((pokemon) => {
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
              return {
                id: data.id.toString().padStart(3, "0"),
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                image: data.sprites.front_default,
              };
            });
        })

        Promise.all(pokemonData).then((pokemonData) => {
          setPokemonList(pokemonData);
        });
        // setPokemonList(pokemonData);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {pokemonList.map((pokemon) => {
        return (
          <div className="flex flex-col items-center w-52 px-6 py-3 border-solid border-2 rounded-2xl shadow-zinc-300 shadow-md">
            <div className="w-full flex flex-col items-center">
              <p className="self-end text-right font-normal text-gray-400">#{pokemon.id}</p>
              <div className="w-32 flex">
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
