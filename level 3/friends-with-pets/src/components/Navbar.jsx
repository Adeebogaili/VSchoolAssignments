import React from "react"

export default function Navbar () {
    return (
        <header>
            <nav>
                <div className="nav-brand">
                    <i class="fa-solid fa-paw"></i>
                    <a href="#" className="brand-name">Pet's</a>
                </div>
                <ul className="nav-list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Traininig</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Medi-Care</a></li>
                </ul>
            </nav>
        </header>
    )
}