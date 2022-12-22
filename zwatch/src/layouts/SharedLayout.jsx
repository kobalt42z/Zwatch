import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

import NavBar from '../components/NavBar/NavBar'

const SharedLayout = () => {
    return (
        <>
            {/* <Header/> */}
            <Outlet/>
        </>        
    )
}

export default SharedLayout