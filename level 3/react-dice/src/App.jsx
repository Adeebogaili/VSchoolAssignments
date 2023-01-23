import React from 'react'
import Heading from './component/Heading'
import DiceBox from './component/DiceBox'
import Button from './component/Button'

// App component
function App() {
  
  // State to hold the numbers
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5, 6])

  // Random Numbers
  const randomNumber1 = Math.floor(Math.random() * 7)
  const randomNumber2 = Math.floor(Math.random() * 7)
  const randomNumber3 = Math.floor(Math.random() * 7)
  const randomNumber4 = Math.floor(Math.random() * 7)
  const randomNumber5 = Math.floor(Math.random() * 7)
  const randomNumber6 = Math.floor(Math.random() * 7)

  // Mapping the numbers to the dice-box component
  const numberElements = numbers.map((number, index) => {   
    return (
      <DiceBox
        key={index}
        number={number}
      />
    )
  })

  // Function to roll the dice
  function rollDice() {
    setNumbers([randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5, randomNumber6])
  }

  return (
    <div className="container">
      <Heading />
      <div className='numbers-container'>
        {numberElements}
      </div>
      <Button 
      onClick={rollDice} 
      className="button"/>
    </div>
  )
}

export default App
