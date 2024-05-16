'use client'
import React, { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { get20Pokemon } from "@/lib/pokemon";
import { Pokemon } from "@/lib/models";

function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPokemons() {
      setIsLoading(true);
      const newPokemons = await get20Pokemon(page);
      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
      setIsLoading(false);
    }

    loadPokemons();
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-5 justify-center w-full">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.pokedexId} pokemon={pokemon} />
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

export default Home;