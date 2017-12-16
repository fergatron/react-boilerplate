import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

// bootstrap
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';

const Header = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>React Boilerplate</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to='/link1'>
            <NavItem eventKey={1}>Link 1</NavItem>
          </LinkContainer>
          <LinkContainer to='/link2'>
            <NavItem eventKey={2}>Link 2</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title='Dropdown' id='nav-dropdown'>
            <LinkContainer to='/link3/action'>
              <MenuItem eventKey={3.1}>Action</MenuItem>
            </LinkContainer>
            <LinkContainer to='/link3/another-action'>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
            </LinkContainer>
              <MenuItem divider />
            <LinkContainer to='/link3/something-else-here'>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to='/link4'>
            <NavItem eventKey={4}>Link 4</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
