import {useState} from 'react'

const AddBountyForm = (props) => {

  const initInputs = {firstName: props.firstName || "", lastName: props.lastName || "", type: props.type || ""}

  const [inputs, setInputs] = useState(initInputs) 
  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.submit(inputs, props._id)
    setInputs(initInputs)
    props.setEditToggle(prevToggle => !prevToggle)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName" 
        value={inputs.firstName} 
        onChange={handleChange} 
        placeholder="First Name" 
        required
      />
      <input 
        type="text" 
        name="lastName" 
        value={inputs.lastName} 
        onChange={handleChange} 
        placeholder="Last Name" 
        required
      />
      <input 
        type="text" 
        name="type" 
        value={inputs.type} 
        onChange={handleChange} 
        placeholder="Type" 
        required
      />  
    <button>{props.btnText}</button>
    </form>
  )
}

export default AddBountyForm

/* 
useState is used to create a state for inputs and setInputs, which represent the input fields in the form.

initInputs is an object that initializes the state of inputs with default values if no props are passed in.

handleChange is a function that handles changes to the input fields by updating the inputs state object.

handleSubmit is a function that prevents the default form submission behavior and passes the current input values
to the submit function passed in via props, which is expected to be called with the inputs object and 
a props._id value if it exists. It then resets the inputs state object to its initial values and toggles 
the edit form off by calling props.setEditToggle.

The return statement renders a form with three input fields and a submit button. 
The value and onChange props of the input fields are set to the inputs state and handleChange function, respectively. 
The submit button text is set by the props.btnText value.
*/