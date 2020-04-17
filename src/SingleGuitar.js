import React from "react"
import { useParams } from "react-router-dom"
import guitarData from "./guitarData"

function SingleGuitar() {

  const {guitarId } = useParams()

  const thisGuitar = guitarData.find(item => (item.id === guitarId))

  return(
    <div>
      <h1>Guitar: {thisGuitar.name}</h1>
      <p>Brand: {thisGuitar.brand}</p>
      <p>Year Made: {thisGuitar.year}</p>
    </div>
  )
}

export default SingleGuitar