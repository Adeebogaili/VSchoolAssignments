import React from 'react'
import Box from './components/Box'
import Button from './components/Button'

function App() {
  // create a state variable named `colors` with an initial value of an array of four "white" strings
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])

  // create an array of Box components with the color prop set to the corresponding color from the `colors` state variable
  const colorElements = colors.map((color, index) => {
    return (
      <Box
        key={index}
        color={color}
        />
    )
  })

  // function that changes the first square to black, or white if it's already black
  const smallTimeDJ = () => {
    console.log("Small Time DJ")
    setColors(prevColor => prevColor[0] === 'white' ? ['black', 'black', 'black', 'black'] : ['white', 'white', 'white', 'white'])
  }

  // function that changes the top two squares to purple
const partyDJ = () => {
  console.log("Party DJ")
  setColors(prevColor => ["purple", "purple", prevColor, prevColor]
  )
}

// This function will change the color of the bottom left square to blue by
const bottomLeftBlue = () => {
  console.log("Bottom Left Blue")
  setColors(prevColor => [prevColor, prevColor, "blue", prevColor]
  )
}

// This function will change the color of the bottom right square to blue
const bottomRightBlue = () => {
  console.log("Bottom Right Blue")
  setColors(prevColor => [prevColor, prevColor, prevColor, "blue"]
  )
}

// This function will change all the squares to yellow, orange, green and pink
const bigTimeDJ = () => {
  console.log("Big Time DJ")
  setColors(prevColor => ["yellow", "orange", "green", "pink"]
  )
}

  return (
    <div className='dj-color-board'>
      <div className='grid'>
          {colorElements}
      </div>
      <div className='buttons'>
          <Button text="Small Time DJ" onClick={smallTimeDJ}/>
          <Button text="Party DJ" onClick={partyDJ}/>
          <Button text="Professional DJ/BL" onClick={bottomLeftBlue}/>
          <Button text="Professional DJ/BR" onClick={bottomRightBlue}/>
          <Button text="Big Time DJ" onClick={bigTimeDJ}/>
      </div>
      </div>
  )
}

export default App