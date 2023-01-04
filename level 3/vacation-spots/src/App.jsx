import React from "react"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import data from "./data"

export default function App() {
    const sections = data.map(item => {
        return (
            <Section
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            {sections}
        </div>
    )
}