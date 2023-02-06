import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';


function Form(props) {

  const initialState = {
    title: "",
    imgUrl: "",
    description: "",
    likes: ""
  }

  const [uglyAnimals, setUglyAnimals] = useState(initialState)
  
  function handleChange(e) {
    const { name, value } = e.target;
    setUglyAnimals((prevAnimals) => ({
      ...prevAnimals,
      [name]: value,
    }));
  }

    // Function to handle the form submission
    function handleSubmit(e) {
      e.preventDefault();
      axios.post("https://api.vschool.io/adeeb/thing", {
        title: uglyAnimals.title,
        imgUrl: uglyAnimals.imgUrl,
        description: uglyAnimals.description,
      })
      .then(res => {
        setUglyAnimals(initialState);
        props.updateAnimals(prevAnimals => [...prevAnimals, res.data])
      })
    }

  return (
    <>
    <form className='input-form' onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={uglyAnimals.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Img URL"
        name="imgUrl"
        value={uglyAnimals.imgUrl}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={uglyAnimals.description}
        onChange={handleChange}
      />
      <button className='submit-btn'><i className="fa-regular fa-plus"></i></button>
    </form>
    </>
  )
}

export default Form

