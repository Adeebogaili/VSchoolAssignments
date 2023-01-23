import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = "https://www.colr.org/json/color/random?timestamp="

function App() {

  const [boxes, setBoxes] = useState("000000")

  // request the colors api using axios. I moved the date from the URL so get a different color everytime youi make a change.
  useEffect(() => {
    axios
      .get(baseUrl + new Date().getTime())
      .then(res => setBoxes(res.data.new_color))
      .catch(err => console.error(err))
  }, [])

  // inline styling to change the background color
  const styles = {
    backgroundColor: `#${boxes}`
  }

  return (
    <div className="container">
      <div className='box' style={styles}></div>
    </div>
  )
}

export default App
