import React from "react";

// PokémonCard component definition
const PokemonCard = ({ name, imageUrl, number, types }) => {
  return (
    <div className="max-w-72 rounded overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl relative cursor-pointer">
      <div
        className="bg-contain bg-no-repeat bg-center h-64 w-full relative group cursor-pointer"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Pseudo-elemento para escurecer a imagem no hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-gradient-to-t from-[#0000]/90 to-transparent transition-opacity duration-300 ease-in-out"></div>

        {/* Overlay that animates on hover */}
        <div className="absolute bottom-0 left-0 p-4 transition-all duration-300 ease-in-out">
          {/* Nome sempre visível na parte inferior, mas sobe no hover */}
          <div className="absolute bottom-4 left-0 right-0 px-4 transition-transform duration-300 ease-linear transform group-hover:-translate-y-20">
            <h3 className="text-white text-xl font-bold text-center">{name}</h3>
          </div>
          {/* Detalhes escondidos que aparecem com o hover */}
          <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-opacity transition-transform duration-300 ease-linear w-full">
            <p className="text-white text-lg text-center">{`#${number}`}</p>
            <div className="flex justify-center space-x-2 mt-2">
              {types.map((type, index) => (
                <span
                  key={index}
                  className="text-white py-1 px-3 rounded bg-gradient-to-t from-[#F6E05E]/90 to-transparent"
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
