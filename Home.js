import React from 'react'
import NavBar from './NavBar'
import { Button } from 'bootstrap'

const Home = () => {
  return (
    <div className=''>
        <NavBar></NavBar>
        <div className='container'>
            <h1>Hello Home </h1>
            <button className='btn btn-danger'>Home</button>
        </div>
    </div>
    
  )
}

export default Home