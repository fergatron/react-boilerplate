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
          <p>Social media icons</p>
        </Col>
        <Col xs={12} md={4}>
          <h3>Branding</h3>
          <p>Lipsum...</p>
        </Col>
        <Col xs={12} md={4}>
          <h3>Navigate</h3>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 4</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
        <address>
          <strong>Brand Name </strong>
          123 Peachtree Street, Atlanta, GA 30319
        </address>
        </Col>
      </Row>
    </Grid>
  );
};

export default Footer;
