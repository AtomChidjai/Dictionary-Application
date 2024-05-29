import React from 'react'
import Hero from './components/Hero'
import NavbarComp from './components/NavbarComp'
import { Navbar } from 'react-bootstrap'
import Searchbar from './components/Searchbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <NavbarComp/>      
      <Searchbar/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App