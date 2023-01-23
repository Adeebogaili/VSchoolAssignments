import { useState } from 'react'
import Header from './components/Header'
import CreateMeme from './components/CreateMeme'
import Meme from './components/Meme'
import Footer from './components/Footer'

function App() {

  const [memes, setMemes] = useState([])

  const [isEdit, setIsEdit] = useState({})

  function addMeme(newMeme) {
    setMemes(prevMemes => {
      return [...prevMemes, newMeme]
    })
  }

  function deleteMeme(id) {
    setMemes(prevMemes => {
      return prevMemes.filter((memeItem, index) => {
        return index !==id
      })
    })
  }

  function editMeme(id) {
    console.log("edited meme", id)
    setIsEdit(prevMemes => {
      return prevMemes.filter((memeItem, index) => {
        return index === id
      })
    })
  }

  return (
    <div className="container">
      <Header />
      <CreateMeme onAdd={addMeme} />
      <div className='memes-container'>
      {memes.map((memeItem, index) => {
        return (
          <Meme 
            key={index}
            id={index}
            topText={memeItem.topText}
            bottomText={memeItem.bottomText}
            randomImage={memeItem.randomImage}
            onDelete={deleteMeme}
            onEdit={editMeme}
          />
        )
      })}
      </div>
      <Footer />
    </div>
  )
}

export default App
