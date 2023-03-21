import React, { useState, useContext } from 'react';
import { CommentContext } from '../context/CommentProvider';

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
      <form onSubmit={handleSubmit}>
          <textarea
          type='text'
          name='comment'
          value={comment}
          onChange={handleChange}
          placeholder='Type Comment'
          />
          <button>Submit Comment</button>
      </form>
      </>
  )
}

export default CommentForm
