import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// bootstrap
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

// components
import Footer from './components/footer';
import Header from './components/header';

// pages
import Home from './pages/home';
import Link1 from './pages/link1';

import './stylesheets/main.scss';

export default class App extends Component {

  renderRouterSwitch() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/link1' component={Link1} />
            </Switch>
          </Col>
        </Row>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        <Header />
        { this.renderRouterSwitch() }
        <Footer />
      </div>
    )
  }
}
