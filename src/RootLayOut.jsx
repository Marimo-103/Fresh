import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const RootLayOut = () => {

    const location = useLocation();
    const hideFooterPaths = ['index', '/sign/up', '/log/in']

    const hideNavbarPaths = ['/products', '/sign/up', '/log/in']

  return (
    <div>
        {location.pathname !== '/products' && !hideNavbarPaths.includes(location.pathname) && <Navbar />}
        
        <Outlet />

        {location.pathname !== '/' && !hideFooterPaths.includes(location.pathname) && <Footer />}
    
    </div>
  )
}

export default RootLayOut