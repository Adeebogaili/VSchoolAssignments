import React from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.color
    }
    return (
            <div 
                style={styles}
                className="square"
                >
            </div>
    )
}