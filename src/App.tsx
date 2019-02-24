import React, { Component } from 'react';
import logo from './logo.svg';
import './shared/assets/sass/main.scss';
import Home from './home/home';
import Resume from './resume/resume';

import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cv" component={Resume} />
      {/* <Home />
      <Resume /> */}
      </Switch>
      </div>
    );
  }
}

export default App;
