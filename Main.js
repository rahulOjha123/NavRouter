import React from 'react'
import Home from './Home'
import Gallary from './Gallary'
import Information from './Information'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


const Main = () => {
  return (
    <div>
            <BrowserRouter>
                    <Routes>
                        <Route path='/'element={<Home></Home>} />
                        <Route path='/gallary'element={<Gallary></Gallary>} />
                        <Route path="/information"element={<Information></Information>} />
                    </Routes>
            </BrowserRouter>
            
    </div>
  )
}

export default Main