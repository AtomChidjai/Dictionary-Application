import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaBook } from "react-icons/fa";

const NavbarComp = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-success'>
        <Container>
          <Navbar.Brand className='text-white'>
            <FaBook className='me-3' style={{fontSize : '1.5em'}}/>
            Dictionary App
          </Navbar.Brand>
          <Navbar.Toggle style={{backgroundColor : 'white'}} aria-controls='navbar-nav'/>
          <Navbar.Collapse id='navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#' className='text-white me-3'>Home</Nav.Link>
              <Nav.Link href='https://dictionaryapi.dev/' className='text-white'>Api</Nav.Link>
            </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp