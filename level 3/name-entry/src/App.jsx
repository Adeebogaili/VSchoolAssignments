import React from 'react'

function App() {

  // Names Array State
  const [namesArray, setNamesArray] = React.useState([])

  // Names list shown when name is submitted
  const namesArrayElements = namesArray.map((names, index) => {
    return (
      <li key={index}>{names.fullName}</li>
    )
  })

  // Input Field State
  const [formData, setFormData] = React.useState({
    fullName: ""
  })
  
  
  function handleChange(event) {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }

  let {fullName} = formData

  function handleClick() {
    setNamesArray([...namesArray, {fullName}])
    console.log(namesArray)
    console.log(formData)
    setFormData({fullName: ""})
  }
  
  return (
    <div className="form-container">
      <input 
        type="text"
        name='fullName'
        placeholder='Enter Full Name'
        value={formData.fullName}
        onChange={handleChange}
      />
    <button onClick={handleClick} >Add to List</button>

    <ol>
      {namesArrayElements}
    </ol>
    </div>
  )
}

export default App
