import React, { Component } from 'react';
import './shared/assets/sass/main.scss';
import Home from './home/home';
import Resume from './resume/resume';

import { Route, Switch } from 'react-router-dom';
class App extends Component {
  constructor(props: any) {
    super(props);
    this.toggleViewState = this.toggleViewState.bind(this);
  }

  state = {
    toggleView: true
  }

  toggleViewState = () => {
    this.setState({ toggleView: !this.state.toggleView });
  }
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="App">
        {
          this.state.toggleView ?
            <div>
              < Home toggleViewState={this.toggleViewState} />
            </div>
            :
            <div>
              <Resume toggleViewState={this.toggleViewState} />
            </div>
        }
      </div>
    );
  }
}

export default App;
