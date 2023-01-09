import React from 'react'
import DiceBox from './component/DiceBox'
import Button from './component/Button'

function App() {
  
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])

  const randomNumber1 = Math.floor(Math.random() * 6)
  const randomNumber2 = Math.floor(Math.random() * 6)
  const randomNumber3 = Math.floor(Math.random() * 6)
  const randomNumber4 = Math.floor(Math.random() * 6)
  const randomNumber5 = Math.floor(Math.random() * 6)

  const numberElements = numbers.map((number, index) => {   
    return (
      <DiceBox
        key={index}
        number={number}
      />
    )
  })

  function rollDice() {
    setNumbers([randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5])
  }

  return (
    <div className="container">
      <div className='numbers-container'>
        {numberElements}
      </div>
      <Button onClick={rollDice} />
    </div>
  )
}

export default App

//     Math.floor(Math.random() * 6)

