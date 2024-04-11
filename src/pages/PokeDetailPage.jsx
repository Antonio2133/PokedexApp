import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../components/hooks/useFetch'
import '../pages/styles/PokeDetailPage.css'


const PokeDetailPage = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}` 
  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])


  return (
    <div className='detail_container'>
      <header className='detail_header'>
        <img className='detail_image' src={pokemon?.sprites.other['official-artwork'].front_default} alt='' />
       
      </header>
      <span className='detail_id'>#{pokemon?.id}</span>
      <h2 className='detail_name'>_______________{pokemon?.name}_______________</h2>
      <section>
        <ul>
          <li>Weight:{pokemon?.weight}</li>
          <li>Height:{pokemon?.height}</li>
        </ul>
      </section>
      <section>
        <h3>Type</h3>
        <ul>
          <li>{pokemon?.types[0].type.name}</li>
          <li>{pokemon?.types[1].type.name}</li>
        </ul>
        <h3>Stats</h3>
        <ul>
        {
            pokemon?.stats.map(statInfo => (
              <li key={statInfo.stat.url}>
                <span>{statInfo.stat.name}</span>
                <span> {statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
      <section>
        <h3>Movements</h3>
        {
          pokemon?.moves.map(moveInfo => (
            <li key={moveInfo.move.url}>
              <span>{moveInfo.move.name}</span>
            </li>
          ))
        }
      </section>
      
    </div>
  )
}

export default PokeDetailPage