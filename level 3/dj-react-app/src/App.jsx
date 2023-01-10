import React from 'react'
import Box from './components/Box'
import Button from './components/Button'

function App() {

  const [colors, setColors] = React.useState(["white", "white", "white", "white"])

  const colorElements = colors.map((color, index) => {
    return (
      <Box
        key={index}
        color={color}
        className="box"
        />
    )
  })


  // Small Time DJ Toggle
  const smallTimeDJ = () => {
    console.log("Small Time DJ")
    setColors( (prevColors) => {
        const newColors = colors.map(color => {
             if (color === "white"){
                return "black"
            } else if (color === "black"){
                 return "white"
            } else {
                return "white"
            }
        })
        return newColors
    })
}

// Party DJ Toggle

const partyDJ = () => {
  console.log("Party DJ")
  setColors(prevColor => ["purple", "purple", prevColor, prevColor]
  )
}

// Professional DJ Toggle bottom left blue

const bottomLeftBlue = () => {
  console.log("Bottom Left Blue")
  setColors(prevColor => [prevColor, prevColor, "blue", prevColor]
  )
}

// Professional DJ Toggle bottom right blue

const bottomRightBlue = () => {
  console.log("Bottom Right Blue")
  setColors(prevColor => [prevColor, prevColor, prevColor, "blue"]
  )
}

// Big Time DJ random colors

const bigTimeDJ = () => {
  console.log("Big Time DJ")
  setColors(prevColor => ["yellow", "orange", "green", "pink"]
  )
}

  return (
    <section className="main-container">
      <div className='boxes-container'>
          {colorElements}
      </div>
      <div className='buttons-container'>
          <Button text="Small Time DJ" onClick={smallTimeDJ}/>
          <Button text="Party DJ" onClick={partyDJ}/>
          <Button text="Professional DJ/BL" onClick={bottomLeftBlue}/>
          <Button text="Professional DJ/BR" onClick={bottomRightBlue}/>
          <Button text="Big Time DJ" onClick={bigTimeDJ}/>
      </div>
    </section>
  )
}

export default App