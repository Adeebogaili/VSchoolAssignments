import React from "react"
import Pet from "./Pet"

export default function Friend(props) {

    const {
        friend
    } = props

    const pets = friend.pets.map((pet, index) => {
        return (
            <Pet 
                key={index}
                pet={pet}
            />
        )
    })

    return (
        <div className="owner-container">
            <h2 className="owner-name">Hi, my name is {friend.name}. I'm {friend.age} Years old. My pets are:</h2>
            <ul className="pet-list">
                <li>{pets}</li>
            </ul>
        </div>

    )
}