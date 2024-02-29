import React from 'react';
import { Navbar, Nav, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logoImage from '../img/favicon.jpg'; // Replace with the actual path to your logo image
import { useTheme } from '../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
const NavigationBar = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Navbar style={{ backgroundColor: theme === 'dark' ? '#1F2937' : '#3D405B' }} expand="lg" className='px-5 fixed-top '>
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
         <Button onClick={toggleTheme} className='ml-1 ' style={{backgroundColor:"#0000",border:"none"}}>
           {theme === 'dark' ? <FaMoon size={20} /> : <FaSun size={20} />}
         </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
