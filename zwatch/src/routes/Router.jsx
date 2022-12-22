import React from 'react'
import { BrowserRouter, Link, Navigate,  Route, Routes } from 'react-router-dom'
import Home from '../layouts/Home'
import SharedLayout from '../layouts/sharedLayout'
const Router = () => {
  return (

    <BrowserRouter>
      <Routes>

{/* //? how to make the root path redirect to home?
 */}
        <Route path='/' element={<Navigate to="/Home"/>} />
        <Route path="/Home" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
           
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router