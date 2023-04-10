import React, { useState, useContext } from 'react'
import { BASE_URL } from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';


const initInputs = {
  title: "",
  description: "",
  imgUrl: ""
}

export default function TourForm(){

  const { user } = useContext(AuthContext);


  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    setInputs(initInputs)
  }

  const { title, description, imgUrl } = inputs
  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
      <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url"/>
      <button><i className="fa-solid fa-plus"></i></button>
    </form>
  )
}