import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <a href="#" className="navbar-brand">Start Bootstrap</a>
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="index.html" className="navbar-link">Home</a></li>
                    <li className="navbar-item"><a href="index.html" className="navbar-link">about</a></li>
                    <li className="navbar-item"><a href="index.html" className="navbar-link">sample post</a></li>
                    <li className="navbar-item"><a href="index.html" className="navbar-link">contact</a></li>
                </ul>
            </nav>
            <div className="hero">
                <h1 className="hero-title">Clean Blog</h1>
                <p className="hero-par">A Blog Theme by Start Bootstrap</p>
            </div>
        </header>
    )
}