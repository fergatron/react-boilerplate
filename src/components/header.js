import React from 'react';
import { Link } from 'react-router-dom';

// bootstrap
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';

const Header = () => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='navbar-collapse' aria-expanded='false'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link className='navbar-brand' to='/'>React Boilerplate</Link>
        </div>

        <div className='collapse navbar-collapse' id='navbar-collapse'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to='/link1'>Link 1</Link>
            </li>
            <li>
              <Link to='/link2'>Link 2</Link>
            </li>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
                Dropdown <span className='caret'></span>
              </a>
              <ul className='dropdown-menu'>
                <li><a href='#'>Action</a></li>
                <li><a href='#'>Another action</a></li>
                <li><a href='#'>Something else here</a></li>
                <li role='separator' className='divider'></li>
                <li><a href='#'>Separated link</a></li>
                <li role='separator' className='divider'></li>
                <li><a href='#'>One more separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;
