import React, { useRef } from 'react'
import { setTrainer } from '../../store/states/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './style/FormTrainer.css'

const FormTrainer = () => {

  const trainerInput = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainer(trainerInput.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <form className='form_container' onSubmit={handleSubmit} >
      <input className='form_input' ref={trainerInput} type='text'></input>
      <button className='form_btn'>Let's Start</button>
    </form>
  )
}

export default FormTrainer