import React from "react"

export default function Button(props){
    return (
            <button
            onClick={props.onClick}
            className="buttons">   
            {props.text}

            </button>
    )
}