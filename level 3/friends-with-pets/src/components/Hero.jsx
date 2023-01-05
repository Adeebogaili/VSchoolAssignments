import React from "react"
import FriendList from "./FriendList"

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-info">
                        <h1 className="hero-header">Your Pet</h1>
                        <h2 className="hero-header">social center</h2>
                        <p>Make new friends everyday, and explore other options.</p>
                </div>
                <img className="hero-img" src="https://fearfreepets.com/wp-content/uploads/2022/06/icon-illustration-lt-blue.png" alt="" />
            </div>
            <FriendList />
        </div>
    )
}