import React, { Component, useState } from 'react';
import './shared/assets/sass/main.scss';
import './App.scss';
import Home from './home/home';
import Resume from './resume/resume';
import { Animated } from "react-animated-css";
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
              <Home toggleViewState={this.toggleViewState} />
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
