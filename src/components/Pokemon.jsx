function CreatePokemonCard({ pokemon }) {
  return (
      <div className="flex flex-col items-center w-28 p-3 border-solid border-2">
        <p className="w-full text-right">#{pokemon.id}</p>
        <div className="w-14 flex">
          <img className="w-full" src={pokemon.image} alt={pokemon.name} />
        </div>
        <h2>{pokemon.name}</h2>
      </div>
  );
}

export default CreatePokemonCard;
