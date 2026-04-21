import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
   
    return (
        <div>
            <nav >
                <Link to="/" style={{ margin: "10px" }}>Home</Link>
                <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
                <Link to="/about" style={{ margin: "10px" }}>About</Link>
            </nav>
        </div>
    )
}

export default Navbar
