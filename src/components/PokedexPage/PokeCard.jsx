import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import '../PokedexPage/style/PokeCard.css'
import pokeball from '../../assets/img/pokeball.png'

const PokeCard = ({ pokeInfo }) => {

  const [ pokemon, getPokemon ] = useFetch(pokeInfo.url)

  useEffect(() => {
    getPokemon()
  }, [])

  const navigate = useNavigate()

  const handlePokeDetail = () => {
    navigate( `/pokedex/${pokeInfo.name}` )
  }

  
  return (
    <article className='card' onClick={handlePokeDetail}>
      <header className={`card_header ${pokemon?.types[0].type.name}` }>
        <img className='card_img'
          src={pokemon?.sprites.other['official-artwork'].front_default} 
          alt='' 
        />
      </header>
      <section>
        <h3 className='card_principal'>{pokemon?.name}</h3>
        <ul className='card_name'>
          {
            pokemon?.types.map((typeInfo) => (
              <li key={typeInfo.type.url}><img src={pokeball} className='card_icon'/>{typeInfo.type.name}</li>
            ))
          }
        </ul>
      </section>
      <hr />
      <section>
        <ul className='card_description'>
          {
            pokemon?.stats.map(statInfo => (
              <li key={statInfo.stat.url}>
                <span className='card_stat_number'>{statInfo.stat.name}</span>
                <span> → {statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard