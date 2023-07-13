import React from 'react'
import Navbars from "./Routerjs/NavRouters/Navbars";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavLogOut from "./Routerjs/NavRouters/NavLogOut";
import NavSigin from "./Routerjs/NavRouters/NavSigin";

const Main_One = () => {
  return (
    <>
     <BrowserRouter>
        <Navbars></Navbars>
        <Routes>
            <Route path='/'element={<Navbars></Navbars>} />
          <Route  path="/navlogout"element={<NavLogOut></NavLogOut>} />
          <Route  path="/navsigin"element={<NavSigin></NavSigin>} />
        </Routes>
        </BrowserRouter>
    
    </>
  )
}

export default Main_One