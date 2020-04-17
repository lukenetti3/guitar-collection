import React from "react"
import { Link } from "react-router-dom"

function Guitars(props) {
  function deleteGuitar(thisGuitar) {
    props.function(props.data.filter((guitar) => guitar.id !== thisGuitar.id))
  }

  const guitar = props.data.map((guitar) => (
    <div className="guitar-box">
      <h2 key={guitar.id}>
        {guitar.name}
      </h2>
      <Link className='body-link' to={`/guitars/${guitar.id}`}>
          <button className="list-button">View More</button>
        </Link>
      <button className="list-button" onClick={() => deleteGuitar(guitar)}>Delete</button>
    </div>
  ))

  return (
    <div style={{textAlign: "center"}}>
      <h1>List of guitars</h1>
      <div key={guitar.id} className='flex'>
        {guitar}
      </div>
    </div>
  )
}

export default Guitars
