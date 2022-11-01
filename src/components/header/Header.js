import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate()
  const[open,setOpen]=useState(false)
  const openHeader=()=>{
setOpen(!open)
  }
  const closeHeader=()=>{
    setOpen(false)
  }
  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <div className='menu_bar' onClick={openHeader}><i className="fa-solid fa-bars"></i></div>
        </Container>
        <div className='login'>Login</div>
      </Navbar>
      {
        open &&(
          <header className='headerContainer'>
        <div className='logo'>
          <img src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_960_720.jpg" alt=""></img>
          <h3>Logo Name</h3>
        </div>
        <div className='navigationLink'>
         <NavLink to='/newStudent' className='navLink'>Form</NavLink>
         <NavLink to='/' className='navLink'>Table</NavLink>
        </div>
        <div className='close' onClick={closeHeader}><i className="fa-solid fa-xmark"></i></div>
      </header>
        )
      }
    </>
  )
}

export default Header
