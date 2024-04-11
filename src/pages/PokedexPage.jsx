import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../components/hooks/useFetch'
import ListPokemons from '../components/PokedexPage/ListPokemons'
import { useState } from 'react'
import SelectType from '../components/PokedexPage/SelectType'
import './styles/PokedexPage.css'
import navPokedex from '../assets/img/navpokedex.png'

const PokedexPage = () => {

  const [ pokeSearch, setPokeSearch ] = useState('')
  const [ typeSelected, setTypeSelected ] = useState('allPokemons')
  const [ page, setPage ] = useState(1)
  const [ pokePerPage, setPokePerPage ] = useState(21)
  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0'
  const [ pokemons, getPokemons, getPokeByType ] = useFetch(url)

  useEffect(() => {

    if (typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getPokeByType(typeSelected)
    }
    setPage(1)
  }, [typeSelected])

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
    setPage(1)
  }

  const pokemonsFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch)
  })
  //pagination
  const startIndex = (page - 1) * pokePerPage
  const endIndex = page * pokePerPage
  const quantityPokes = pokemonsFiltered ? pokemonsFiltered.length : 0
  const quantityPages = Math.ceil(quantityPokes / pokePerPage)

  return (
    <div className='pokedex_container'>
      <nav className='pokedex_nav'>
          <img className='pokedex_nav_image' src={navPokedex} alt='nav image'/>
      </nav>
      <form className='pokedex_form' onSubmit={handleSubmit} >
      <p>Welcome <span className='pokedex_trainer'>{trainer}</span>, here you can find your favorite pokemon.</p>
        <input className='pokedex_input' ref={inputSearch} type='text' />
        <button className='pokedex_button'>Search</button>
      </form>
      <SelectType
        setTypeSelected={setTypeSelected}
      />
      <ListPokemons 
        pokemons={pokemonsFiltered}
        startIndex={startIndex}
        endIndex={endIndex}
        quantityPages={quantityPages}
        setPage={setPage}
        page={page}
      />
      
    </div>
  )
}

export default PokedexPage