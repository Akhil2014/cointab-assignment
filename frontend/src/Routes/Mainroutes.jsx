import React from 'react'
import {Routes , Route} from "react-router-dom"
import Homepage from '../Pages/Homepage'
import Userpage from '../Pages/Userpage'
const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/userpage' element={<Userpage />} />
    </Routes>
  )
}

export default Mainroutes