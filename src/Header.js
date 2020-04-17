import React from "react"
import { Link } from "react-router-dom"

function Header() {
  return(
    <div className="header-container">
      <Link className="header-link" to="/">Home</Link>
      <Link className="header-link" to="/guitars">Guitars</Link>
    </div>
  )
}

export default Header