import React from 'react'
import Box from './components/Box'
import Button from './components/Button'

function App() {

  const [colors, setColors] = React.useState(["white", "white", "white", "white"])


  // Small Time DJ Toggle
  function smallTimeDJ() {
    console.log("Small Time DJ")
    setColors( () => {
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

function partyDJ() {
  console.log("Party DJ")
  setColors(prevColor => ["purple", "purple", prevColor, prevColor]
  )
}

// Professional DJ Toggle bottom left blue

function bottomLeftBlue() {
  console.log("Bottom Left Blue")
  setColors(prevColor => [prevColor, prevColor, "blue", prevColor]
  )
}

// Professional DJ Toggle bottom right blue

function bottomRightBlue() {
  console.log("Bottom Right Blue")
  setColors(prevColor => [prevColor, prevColor, prevColor, "blue"]
  )
}

function bigTimeDJ() {
  console.log("Big Time DJ")
  setColors(prevColor => ["yellow", "orange", "green", "pink"]
  )
}


  return (
    <section className="main-container">
      <div className='boxes-container'>
          <Box className="box box-1" color={colors[0]}/>
          <Box className="box box-2" color={colors[1]}/>
          <Box className="box box-3" color={colors[2]}/>
          <Box className="box box-4" color={colors[3]}/>
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
