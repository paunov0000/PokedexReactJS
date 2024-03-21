function CreatePokemon({ pokemonArr }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {pokemonArr.map((pokemon) => {
        console.log(pokemon);
        return (
          <div className="flex flex-col items-center w-52 px-6 py-3 border-solid border-2 rounded-2xl shadow-zinc-300 shadow-md">
            <div className="w-full flex flex-col items-center">
              <p className="self-end text-right font-normal text-gray-400">
                #{pokemon.id}
              </p>
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
  );
}

export default CreatePokemon;
