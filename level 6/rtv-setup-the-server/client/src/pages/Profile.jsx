
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Profile() {
    const { user, updateUser } = useContext(UserContext)
    const [updatedUser, setUpdatedUser] = useState({
        fname: user.fname,
        lname: user.lname,
        profileImage: user.profileImage
    })

    function handleChange(e) {
        const { name, value } = e.target
        setUpdatedUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        updateUser(updatedUser)
    }

    return (
        <div>
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="fname" value={updatedUser.fname} onChange={handleChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lname" value={updatedUser.lname} onChange={handleChange} />
                </label>
                <label>
                    Profile Image:
                    <input type="text" name="profileImage" value={updatedUser.profileImage} onChange={handleChange} />
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    )
}
