import React, { useState } from 'react'

const AddMovieForm = ({ title, genre, submit, btnText, _id}) => {
    const initInputs = {title: title || "", genre: genre || ""}

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initInputs)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="title"
            placeholder="Title"
            value={inputs.title}
            onChange={handleChange}
        />
        <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={inputs.genre}
            onChange={handleChange}
        />
        <button>{btnText}</button>
    </form>
  )
}

export default AddMovieForm