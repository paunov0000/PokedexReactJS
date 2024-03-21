import { useState, useEffect } from "react";

function CreatePokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        const pokemonData = data.results.map((pokemon) => {
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
              return {
                id: data.id.toString().padStart(3, "0"),
                name: data.name,
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
          <div className="flex flex-col items-center w-36 p-3 border-solid border-2 rounded-2xl">
            <div className="flex flex-col items-center">
              <p className="w-full text-right">#{pokemon.id}</p>
              <div className="w-28 flex">
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
