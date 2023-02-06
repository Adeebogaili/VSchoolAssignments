import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import AllUglyAnimalsList from './AllUglyAnimalsList'
import Form from './Form'
import axios from 'axios'

function Main() {
  // Use the ThemeContext to access the color value
  const { color } = useContext(ThemeContext)

  // Use state to store all the ugly animals
  const [allUglyAnimals, setAllUglyAnimals] = useState([])

  // Define the base URL for the API
  const baseURL = "https://api.vschool.io/adeeb/thing"

  // Use the useEffect hook to fetch the ugly animals from the API
  // on initial render
  useEffect(() => {
    const getAnimals = async () => {
      const { data: res } = await axios.get(baseURL)
      setAllUglyAnimals(res)
    }
    getAnimals()
  }, []);

  // Function to edit an ugly animal
  function editUglyAnimals(id, updatedAnimals) {
    axios
      .put(`https://api.vschool.io/adeeb/thing/${id}`, updatedAnimals)
      .then(() => {
        // Re-fetch the ugly animals from the API after editing
        axios
          .get("https://api.vschool.io/adeeb/thing")
          .then(response => {
            setAllUglyAnimals(response.data)
          })
      })
  }

  // Function to delete an ugly animal
  function deleteUglyAnimals(id) {
    axios
      .delete(`https://api.vschool.io/adeeb/thing/${id}`)
      .then(() => {
        // Re-fetch the ugly animals from the API after deleting
        axios
          .get("https://api.vschool.io/adeeb/thing")
          .then(response => {
            setAllUglyAnimals(response.data)
          })
      })
  }

  // Map over the ugly animals to create a list of elements
  const allUglyAnimalsElements = allUglyAnimals.map((animal, index) => {
    return (
      <AllUglyAnimalsList
        key={index}
        id={animal._id}
        title={animal.title}
        imgUrl={animal.imgUrl}
        description={animal.description}
        editUglyAnimals={editUglyAnimals}
        deleteUglyAnimals={deleteUglyAnimals}
      />
    )
  })

  const updateAnimals = (newAnimal) => {
    setAllUglyAnimals(newAnimal)
  }

  // Render the main component

  return (
    <main className={`${color}-theme`}>

      <div className='hero-section'>
        <h1>Ugly Animals</h1>
        <h3>You have {allUglyAnimals.length} unfortunate looking animals in your list!</h3>
      </div>

      <Form
        updateAnimals={setAllUglyAnimals}
      />
      <div className='animals-wrapper'>
        {allUglyAnimalsElements}
      </div>
    </main>
  )
}

export default Main