import React from "react";

// PokémonCard component definition
const PokemonCard = ({ name, imageUrl, number }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div
        className="bg-cover bg-center h-64 w-full"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-black bg-opacity-50 flex flex-col justify-end h-full p-4">
          <h3 className="text-white text-xl font-bold">{name}</h3>
          <p className="text-white text-lg">#{number}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
