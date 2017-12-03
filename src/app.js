import React, { Component } from 'react';

// components
import Footer from './components/footer';
import Header from './components/header';

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
