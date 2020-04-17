import React, { useState } from "react"

function AddGuitar(props) {
  const initialForm = {
    name: "",
    id: "",
    brand: "",
    year: "",
    img: "",
  }

  const [guitar, setGuitar] = useState(initialForm)

  function handleChange(event) {
    const { name, value } = event.target
    setGuitar({ ...guitar, [name]: value })
  }

  function handleSubmit() {
    guitar.id = (props.data.length + 1).toString()
    props.data.push(guitar)
    setGuitar(initialForm)
    alert("Your guitar has been added to the collection")
  }

  return (
    <div className="form-page">
      <h1 style={{textAlign: "center"}}>Add a new guitar to the collection</h1>
      <form>
        <div>
          <div className='form-spacing'>
            <label>Name of Guitar</label>
            <br />
            <input
              type='text'
              value={guitar.name}
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className='form-spacing'>
            <label>Brand</label>
            <br />
            <input
              type='text'
              value={guitar.brand}
              name='brand'
              onChange={handleChange}
            />
          </div>
          <div className='form-spacing'>
            <label>Year</label>
            <br />
            <input
              type='text'
              value={guitar.year}
              name='year'
              onChange={handleChange}
            />
          </div>
          <div className='form-spacing'>
            <label>Image</label>
            <br />
            <input
              type='text'
              value={guitar.img}
              name='img'
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <div style={{textAlign: "center"}}>
        <button onClick={handleSubmit} className="form-button">Submit</button>
      </div>
    </div>
  )
}

export default AddGuitar
