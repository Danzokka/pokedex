export interface Pokemon {
  name: string;
  imagem: string;
  pokedexId: string;
  types: Type[];
}

export interface Type {
  name: string;
  icon: string;
  color: string;
}