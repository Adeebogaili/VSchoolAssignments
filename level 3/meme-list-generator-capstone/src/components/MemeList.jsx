import React from 'react'
import EditMeme from './EditMeme'

// component for displaying a single meme in the list
export default function MemeList(props) {

  return (
      <div className='meme-wrapper'>
        <img className="meme-image image" src={props.randomImage} alt="None" />
        <h2 className='meme-text top'>{props.topText}</h2>
        <h2 className='meme-text bottom-text'>{props.bottomText}</h2>
        <div className="buttons-container">
          <EditMeme
            topText={props.topText}
            bottomText={props.bottomText}
            updateMeme={props.updateMeme}
            id={props.id}
          />
          <button 
            className='button delete-btn' 
            onClick={()=>props.deleteMeme(props.id)}
            >
            <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
      </div>
  )
}

