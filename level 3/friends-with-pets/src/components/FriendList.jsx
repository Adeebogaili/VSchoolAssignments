import React from "react"
import Navbar from "./Navbar"
import Friend from "./Friend"
import data from "../data"

export default function FriendList() {
    const friends = data.map((friend, index)=> {
        return (
            <Friend 
                key = {index}
                friend = {friend}
            />
        )
    })
    return (
        <div>
            {friends}
        </div>
    )
}