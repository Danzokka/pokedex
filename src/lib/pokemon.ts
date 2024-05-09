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
    const color = typeColor(typeName);
    return { name: typeName, icon: iconUrl, color: color};
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
  //const originIconUrl = `https://github.com/waydelyle/pokemon-assets/blob/master/assets/img/symbols/type-${name}.png?raw=true`;
  const originIconUrl = `/svg/${name}.svg`
  return originIconUrl;
}

export function typeColor(name: string){

  name = name.toLowerCase();

  const typeColorMap: { [key: string]: string } = {
    bug: "bg-green-500",
    dark: "bg-gray-800",
    dragon: "bg-indigo-600",
    electric: "bg-yellow-400",
    fairy: "bg-pink-400",
    fighting: "bg-red-600",
    fire: "bg-red-500",
    flying: "bg-blue-300",
    ghost: "bg-purple-600",
    grass: "bg-green-400",
    ground: "bg-yellow-700",
    ice: "bg-blue-200",
    normal: "bg-gray-400",
    poison: "bg-purple-500",
    psychic: "bg-pink-500",
    rock: "bg-yellow-600",
    steel: "bg-gray-500",
    water: "bg-blue-400",
  };

  const bg: string = typeColorMap[name] || 'bg-gray-200';
  return bg;
}