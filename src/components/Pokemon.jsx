function CreatePokemon({ pokemonArr }) {
  return (
    <div className="rounded-2xl bg-neutral-50 p-6 grid grid-cols-3 gap-4">
      {pokemonArr.map((pokemon) => {
        return (
          <div className="bg-neutral-50 flex flex-col items-center w-52 px-6 py-3 border-solid border-2 rounded-2xl shadow-zinc-300 shadow-md">
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
