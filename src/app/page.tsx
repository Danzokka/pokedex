import React from 'react';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import { get20Pokemon } from '@/lib/pokemon';
import { Pokemon } from '@/lib/models';

async function Home() {

  const pokemons = await get20Pokemon();

  return (
    <div className="p-4">

      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard
          key={pokemon.pokedexId}
          pokemon={pokemon}
        />
      ))  
      }
    </div>
  );
}

export default Home;
