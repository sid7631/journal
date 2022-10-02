import * as React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children }) => {

  return (
    <div className='theme-dark bg-primary text-text-main'>
      <Navbar></Navbar>
      <main className='bg'>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout