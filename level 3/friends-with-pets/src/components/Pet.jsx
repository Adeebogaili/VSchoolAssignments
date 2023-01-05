import React from "react"

export default function Pet(props) {
    console.log('props from pets', props)

    return (
            <div className="pets-wrapper">
                <img src={props.pet.imgUrl}
                 alt="name" className="pet-image" />
                <div className="pet-info">
                    <h2 className="pet-name">{props.pet.name}</h2>
                    <h3 className="pet-breed">{props.pet.breed}</h3>
                    <p className="pet-about">{props.pet.about}</p>
                </div>
            </div>
    )
}