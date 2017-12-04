import React from 'react';

// bootstrap
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Row from 'react-bootstrap/lib/Row';

const Footer = () => {
  return (
    <footer>
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <h3>Stay Connected</h3>
            <p>Join over [x-amount of people] who receive [frequency] [action item]</p>
            <Form inline>
              <FormGroup controlId='email'>
                <FormControl type='email' placeholder='Email address' />
              </FormGroup>
              {' '}
              <Button type='submit'>
                Sign-Up
              </Button>
            </Form>
            <i className='fa fa-facebook fa-4x' aria-hidden='true'></i>
            <i className='fa fa-google-plus fa-4x' aria-hidden='true'></i>
            <i className='fa fa-twitter fa-4x' aria-hidden='true'></i>
          </Col>
          <Col xs={12} md={4}>
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra non arcu et tristique. Nunc ultrices velit laoreet, scelerisque felis sit amet, viverra lorem. Integer a libero ut tellus vestibulum.</p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Navigate</h3>
            <ul>
              <li><a href='#'>Link 1</a></li>
              <li><a href='#'>Link 2</a></li>
              <li><a href='#'>Link 4</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className='text-center' xs={12}>
            <hr />
            <address>
              <strong>React Boilerplate </strong>
              123 Peachtree Street, Atlanta, GA 30319
            </address>
            { ' \u00b7 ' }
            <a href="#">Map</a>
            { ' \u00b7 ' }
            Main (555) 555-5555
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

export default Footer;
