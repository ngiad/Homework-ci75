import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Link style={{ "marginRight": "30px", }} to="/ex1">Home</Link>
            <Link to="/products">Products</Link>
        </div>
    )
}

export default Header