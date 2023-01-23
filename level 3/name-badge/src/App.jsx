import React from 'react'
import Badge from './component/Badge'

function App() {

  // Store single user information 
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      nickName: "",
      agency: "",
      date: "",
      badgeNumber: "",
      country: "",
      affiliation: "",
      aboutMe: "",
      image: "",
      signature: "",
      logo: "",
      clearance: "",
      jobTitle: ""
    }
  )

  // sotres users' badges/information in an Array
  const [formDataArray, setFormDataArray] = React.useState([])

  // updates user information
  function handleChange(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  // upon user submittion. stores their information in an array
  function handleSubmit(event) {
    event.preventDefault()
    const newFormData = {...formData}
    setFormDataArray(prevFormDataArray => (
      [...prevFormDataArray, newFormData]
    ))
    console.log(formDataArray)
  }

  const badges = formDataArray.map((badge, index) => {
    return (
      <Badge 
        key={index}
        {...badge}
      />
    )
  })

  return (
    <div className="Container">
      <form onSubmit={handleSubmit} id="form">
        <input 
          type="text" 
          placeholder='First Name'
          name="firstName"
          value={formData.firstName} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Last Name'
          name="lastName"
          value={formData.lastName} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Image'
          name="image"
          value={formData.image} 
          onChange={handleChange}
        />
        <br />
        <input 
          type="text" 
          placeholder='Nick Name'
          name="nickName"
          value={formData.nickName} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Agency/Department'
          name="agency"
          value={formData.agency} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Signature'
          name="signature"
          value={formData.signature} 
          onChange={handleChange}
        />
        <br />
        <input 
          type="date" 
          placeholder='Expiration Date'
          name="date"
          value={formData.date} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Country'
          name="country"
          value={formData.country} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Logo'
          name="logo"
          value={formData.logo} 
          onChange={handleChange}
        />
        <br />
        <input 
          type="number" 
          placeholder='Badge Number'
          name="badgeNumber"
          value={formData.badgeNumber} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Affiliation'
          name="affiliation"
          value={formData.affiliation} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Job Title'
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
        <br />
        <select 
          className='selcet'
          id="clearance"
          value={formData.clearance}
          onChange={handleChange}
          name="clearance"
        >
          <option value="#">-- Security Clearance --</option>
          <option value="#228b22">Top Secret</option>
          <option value="#FFEF00">Secret</option>
          <option value="#df2d1a">No Clearance</option>
        </select>        
        <br />
        <textarea 
          value={formData.aboutMe}
          className="textarea"
          rows="5"
          cols="100"
          placeholder="Tell us about yourself"
          onChange={handleChange}
          name="aboutMe"
        />
        <br />
        <button className='submit-btn'>Submit</button>
      </form>
      <div className='badges'>
        {badges}
      </div>
    </div>
  )
}

export default App
