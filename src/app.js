import React, { Component } from 'react';

// components
import Content from './content';
import Footer from './components/footer';
import Header from './components/header';

import './stylesheets/main.scss';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
