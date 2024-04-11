import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './style/SelectType.css'


const SelectType = ({ setTypeSelected }) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [ types, getTypes ] = useFetch(url)

  useEffect(() => {
    getTypes()
  }, [])

  const handleChange = e => {
    setTypeSelected(e.target.value)
  }

  //console.log(types)

  return(
    <select className='select_container' onChange={handleChange}>
      <option value='allPokemons'>All pokemons</option>
      {
        types?.results.map(typeInfo => (
        <option key={typeInfo.url} value={typeInfo.url} >{typeInfo.name}</option>
        ))
      }
    </select>
  )
}


export default SelectType