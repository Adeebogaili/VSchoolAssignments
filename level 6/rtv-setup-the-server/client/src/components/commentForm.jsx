import React, { useState, useContext } from 'react';
import { CommentContext } from '../context/CommentProvider';
import "../styles/commentForm.css"

function CommentForm(props) {

  const initInputs = {
    comment: ""
  }

  const [inputs, setInputs] = useState(initInputs)
  const { addComment } = useContext(CommentContext)

  const {issueId} = props

  function handleChange(e){
      const {name, value} = e.target
      setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
      }))
    }

    function handleSubmit(e){
      e.preventDefault()
      addComment(issueId, inputs)
      setInputs(initInputs)
    }

    const { comment} = inputs
    
  return(
      <>
      <form className="comment-form" onSubmit={handleSubmit}>
          <input
          type='text'
          name='comment'
          value={comment}
          onChange={handleChange}
          placeholder='Write a comment...'
          />
          <button className="comment-submit-btn"><i className="fa-regular fa-paper-plane"></i></button>
      </form>
      </>
  )
}

export default CommentForm
