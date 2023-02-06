import React from 'react'

function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <label>
          <input type="email" name='email' placeholder='Email address' required />
        </label>
        <label>
          <textarea name="message" cols="30" rows="10" placeholder='Enter message' required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact