import React from "react"
import { useParams } from "react-router-dom"

function SingleGuitar(props) {
  const { guitarId } = useParams()

  const thisGuitar = props.data.find((item) => item.id === guitarId)

  return (
    <div>
      <h1 style={{textAlign: "center"}}>
        {thisGuitar.brand} {thisGuitar.name}
      </h1>
      <div className='single-container'>
        <div className='single-box'>
            <p>Guitar: {thisGuitar.name}</p>
            <p>Brand: {thisGuitar.brand}</p>
            <p>Year Made: {thisGuitar.year}</p>
        </div>
          <div className="single-box">
            <img src={thisGuitar.img !== undefined ? thisGuitar.img : null} alt='' />
        </div>
      </div>
    </div>
  )
}

export default SingleGuitar
