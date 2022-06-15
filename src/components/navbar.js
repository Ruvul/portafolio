import React from 'react';
import '../styles/navbar.css'
import logo from '../media/logo_am_blanco.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="100" height="auto"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Nav className="me-auto">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </div>
    );
  }


  export default NavBar;