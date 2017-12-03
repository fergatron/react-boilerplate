import React, { Component } from 'react';

// components
import Footer from './components/footer';
import Header from './components/header';

import './stylesheets/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
