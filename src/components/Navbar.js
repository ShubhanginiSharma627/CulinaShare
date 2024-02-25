import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logoImage from '../img/favicon.jpg'; // Replace with the actual path to your logo image

const NavigationBar = () => {
  return (
    <Navbar style={{backgroundColor:"#3D405B"}} expand="lg" className='px-3 fixed-top '>
      <LinkContainer to="/">
        <div className="d-flex align-items-center justify-content-center">
        <Navbar.Brand>
          <img
            src={logoImage}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="CulinaShare Logo"
          />
        </Navbar.Brand>
        <p style={{color:"#E07A5F",fontFamily: 'Pacifico, sans-serif',fontSize:"1.8rem",marginTop:"1rem"}}>CulinaShare</p>
        </div>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" d-flex justify-content-end" style={{width:"100%"}}>
          <LinkContainer to="/" style={{color:"white"}}>
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contribute" style={{color:"white"}}>
            <Nav.Link>Contribute</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/favorites" style={{color:"white"}}>
            <Nav.Link>Favorites</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/aboutus" style={{color:"white"}}>
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
