import React from 'react'

function Meme(props) {

    function handleDelete() {
        props.onDelete(props.id)
    }

    function handleEdit() {
        props.onEdit(props.id)
    }

    return (
        <div className='meme-wrapper'>
            <img className="meme-image image" src={props.randomImage} alt="None" />
            <h2 className='meme-text top'>{props.topText}</h2>
            <h2 className='meme-text bottom-text'>{props.bottomText}</h2>
            <div className="buttons-container">
              <button 
                className='btn edit-btn'
                onClick={handleEdit}
                >
                <i className="fa-solid fa-pen-to-square"></i>
                </button>
              <button 
                className='btn delete-btn' 
                onClick={handleDelete}
                >
                <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
          </div>
      )
}

export default Meme