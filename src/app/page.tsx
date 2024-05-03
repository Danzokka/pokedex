import React from 'react';
import PokemonCard from '@/components/PokemonCard/PokemonCard';

function App() {
  return (
    <div className="p-4">
      <PokemonCard
        name="Pikachu"
        imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        number="025"
        types={[
          { name: "Electric", iconUrl: "https://example.com/electric-icon.png" },
          // Add more types as needed
        ]}
      />
    </div>
  );
}

export default App;
