import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
// import Footer from './components/footer';
import Header from './components/header';

// pages
import Home from './pages/home';
import Link1 from './pages/link1';
import Link2 from './pages/link2';

import './stylesheets/main.scss';

function renderRouterSwitch() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/link1' component={Link1} />
            <Route path='/link2' component={Link2} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Fragment>
      <Header />
      { renderRouterSwitch() }
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;