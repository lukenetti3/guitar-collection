import React from "react"
import guitarData from "./guitarData"
import { Link } from "react-router-dom"


function Guitars() {
  const guitar = guitarData.map(guitar => (
    <h2 key={guitar.id}><Link to={`/guitars/${guitar.id}`}>{guitar.name}</Link> by {guitar.brand}</h2>
  ))

  return (
    <div>
      <h1>List of guitars</h1>
      {guitar}
    </div>
  )
}

export default Guitars