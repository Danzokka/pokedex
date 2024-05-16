import React from 'react'
import { getPokemonByName } from '@/lib/pokemon'

const PokemonPage = async({params}: any) => {

  const name = params.slug

  const pokemon = await getPokemonByName(name);

  console.log(pokemon)


  
  return (
    <div className='text-white'>{name}</div>
  )
}

export default PokemonPage