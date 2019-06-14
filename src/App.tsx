import React, { Component, useState } from 'react';
import './shared/assets/sass/main.scss';
import './App.scss';
import Home from './home/home';
import Resume from './resume/resume';
import Indicator from './shared/components/indicator/indicator';
class App extends Component {
  constructor(props: any) {
    super(props);
    this.toggleViewState = this.toggleViewState.bind(this);
  }

  state = {
    toggleView: true,
    indicator: true
  }



  indicatorRemove() {
    setTimeout(() => {
      this.setState({ indicator: false });
    }, 1500)
  }

  componentDidMount() {
    this.indicatorRemove();
  }


  toggleViewState = () => {
    this.setState({ toggleView: !this.state.toggleView, indicator: true });
    this.indicatorRemove();
  }
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="App">
        {this.state.indicator && <Indicator />}
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
