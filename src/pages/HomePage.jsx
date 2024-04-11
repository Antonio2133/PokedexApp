import React from 'react'
import FormTrainer from '../components/HomePage/FormTrainer'
import './styles/HomePage.css'
import pokedex from '../assets/img/pokedex_image.png'
import footer from '../assets/img/footer_pokedex.png'



const HomePage = () => {
  return (
    <div>
      <nav className='home_nav'>
        <img className='home_nav_image' src={pokedex} alt=''/>
      </nav>
      <div className='home_container'>
        <h2>Hi trainer!</h2>
        <p className='home_msg'>If you want to see all information of the pokemons, please tell me your trainer name.</p>
        <FormTrainer/>
      </div>
      <footer className='home_footer'>
        <img className='home_footer_image' src={footer} alt=''/>
      </footer>
    </div>
  )
}

export default HomePage