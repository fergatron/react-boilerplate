import React from 'react';
import { Route } from 'react-router-dom';

// bootstrap
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

// pages
import Home from './pages/home';
import Link1 from './pages/link1';

const AppContent = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <Route path='/' component={Home} exact />
          <Route path='/link1' component={Link1} />
        </Col>
      </Row>
    </Grid>
  );
};

export default AppContent;
