import React from 'react'
import NavBar from './NavBar'

function Information() {
  return (
    <div>
        <NavBar></NavBar>
        <div className='container'>
            <h1>Hello Information</h1>
            <button className='btn btn-success'>Information</button>
        </div>
    </div>
  )
}

export default Information