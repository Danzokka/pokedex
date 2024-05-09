import React from "react";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { get20Pokemon } from "@/lib/pokemon";
import { Pokemon } from "@/lib/models";

async function Home() {
  const pokemons = await get20Pokemon();

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-5 justify-center w-full">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.pokedexId} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Home;
