import React from "react"
import Pet from "./Pet"

export default function Friend(props) {

    const pets = props.friend.pets.map(pet => {
        return (
            <Pet 
                pet = {pet}
            />
        )
    })

    return (
        <div className="owner-container">
            <h2 className="owner-name">Hi, my name is {props.friend.name}. I'm {props.friend.age} Years old. My pets are:</h2>
            <ul className="pet-list">
                <li>{pets}</li>
            </ul>
        </div>

    )
}