import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function Header(props) {
  const history = useHistory();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">ShamWoW!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/add">
              Add an Animal
            </Nav.Link>

            <NavDropdown title="Animal List" id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/list/cats"
                onClick={() => {
                  props.onAnimalClick('Cats');
                }}
              >
                Cats
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/list/dogs"
                onClick={() => {
                  props.onAnimalClick('Dogs');
                }}
              >
                Dogs
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Lizard People</NavDropdown.Item>
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
