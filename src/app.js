import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Footer from './components/footer';
import Header from './components/header';

// pages
import Link1 from './pages/link1';

import './stylesheets/main.scss';

export default class App extends Component {

  renderRouterSwitch() {
    <Switch>
      <Route path='/link1' component={Link1} />
    </Switch>
  }

  render() {
    return (
      <div>
        { this.renderRouterSwitch() }
        <Header />
        <Footer />
      </div>
    )
  }
}
