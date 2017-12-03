import React from 'react';

// bootstrap
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';

const Header = () => {
  return(
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React Boilerplate</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link 1</NavItem>
          <NavItem eventKey={2} href="#">Link 2</NavItem>
          <NavDropdown eventKey={3} title='Dropdown' id='nav-dropdown'>
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
          </NavDropdown>
          <NavItem eventKey={4} href="#">Link 4</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
