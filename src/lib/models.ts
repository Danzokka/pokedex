export interface Pokemon {
  name: string;
  imagem: string;
  pokedexId: string;
  stats: Stat[]
  types: Type[];
}

export interface Type {
  name: string;
  icon: string;
  color: string;
}

export interface Stat {
  name: string;
  base_stat: string;
}