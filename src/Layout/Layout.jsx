import React from 'react'
import { Outlet } from 'react-router-dom'

import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}