require('dotenv').config();
import { Pokemon, Type } from "./models";

export async function get20Pokemon() {
  const response = await fetch(`${process.env.HOST}/pokemon`);
  const data = await response.json();

  const pokemonPromises = data.results.map(
    async (result: { name: string; url: string }) => {
      const pokemonData = await getPokemonByUrl(result.url);
      return createPokemon(pokemonData);
    }
  );

  const pokemons = await Promise.all(pokemonPromises);
  return pokemons;
}

export async function getPokemonByUrl(url: string) {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}

export function createPokemon(json: any) {
  const types = json.types.map((type: any) => {
    const typeName = type.type.name;
    const iconUrl = setIconType(typeName);
    return { name: typeName, icon: iconUrl };
  });

  const pokemon: Pokemon = {
    name: json.name,
    pokedexId: json.id,
    imagem: json.sprites.other["official-artwork"].front_default,
    types: types,
  };

  return pokemon;
}

export function setIconType(name : string) {
  const originIconUrl = `https://github.com/waydelyle/pokemon-assets/blob/master/assets/img/symbols/type-${name}.png?raw=true`;
}
