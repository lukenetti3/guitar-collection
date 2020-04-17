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
            
            {thisGuitar.img.startsWith("http") ?
            <div className="single-box">
            {console.log(thisGuitar.img) }
              <img src={thisGuitar.img} alt='' />
            </div> :
            null}
      </div>
    </div>
  )
}

export default SingleGuitar
