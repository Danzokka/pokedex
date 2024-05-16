import { Pokemon } from "@/lib/models";
import React from "react";
import Image from "next/image";
import Link from "next/link"

function capitalize(s: string) {
  return s
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`} className="max-w-72 min-w-[18rem] rounded overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl relative cursor-pointer">
      <div
        className={` bg-contain bg-no-repeat bg-center h-64 w-full relative group cursor-pointer ${pokemon.types[0].color} `}
        style={{ backgroundImage: `url(${pokemon.imagem})`, position: 'relative', zIndex: 1 }}
      >
        {/* Pseudo-elemento para escurecer a imagem no hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-gradient-to-t from-[#0000]/90 to-transparent transition-opacity duration-300 ease-in-out"></div>
        <p className="text-black text-lg absolute right-0 p-4">{`#${pokemon.pokedexId}`}</p>

        {/* Overlay that animates on hover */}
        <div className="absolute bottom-0 left-0 p-4 transition-all duration-300 ease-in-out w-full">
          {/* Nome sempre visível na parte inferior, mas sobe no hover */}
          <div className="absolute bottom-4 left-0 px-4">
            <h3 className="text-black text-xl font-bold text-center group-hover:text-white">
              {capitalize(pokemon.name)}
            </h3>
          </div>
        </div>
        {/* Detalhes escondidos que aparecem com o hover */}
        <div className="absolute top-0 left-0 p-4 w-full">
          <div className="flex space-x-2 mb-2">
            {pokemon.types.map((type, index) => (
              <Image
                key={index}
                alt={type.name}
                src={type.icon}
                width={40}
                height={40}
                className={`py-1 px-3 w-10 h-10 rounded-full ${type.color}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;