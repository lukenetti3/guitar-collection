import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>Welcome to my guitar collection</h1>
      <p>
        Here you will find a list of my favorite guitars. If you have a
        favorite, add it to the list!
      </p>
      <img
        id='home-img'
        src='https://vintageandrareguitars.com/wp-content/uploads/2017/03/VnR-99.jpg'
        alt=''
      />
      <div>
        <Link className='body-link' to='/addGuitar'>
          <button>Add Guitar</button>
        </Link>

        <Link className='body-link' to='/guitars'>
          <button>List of Guitars</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
