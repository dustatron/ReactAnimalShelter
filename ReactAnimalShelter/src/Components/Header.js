import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">ShamWoW!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/list">
              List of Animals
            </Nav.Link>
            <Nav.Link as={Link} to="/add">
              Add an Animal
            </Nav.Link>

            <NavDropdown title="Animals" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lizard People</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Demons</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
