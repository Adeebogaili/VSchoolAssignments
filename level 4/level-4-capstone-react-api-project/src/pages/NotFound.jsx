import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
return (
<div>
    <h2>Page not found!</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed ipsa fugiat magnam iste, sunt unde consectetur
        reiciendis hic quo, soluta in tempore. Consequuntur dolorum minus quisquam et officiis eaque.</p>

    <p>Go to the <Link to="/">HomePage</Link></p>
</div>
)
}

export default NotFound