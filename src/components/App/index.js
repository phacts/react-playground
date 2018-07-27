import React, { Component } from 'react';
import Intro from '../Intro';

import 'whatwg-fetch';

// import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    series: [],
  };

  componentDidMount() {
    // The component has rendered.
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then(response => response.json())
    .then(data => this.setState({ series: data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find your favorite shows!" />

        The length of series array: {this.state.series.length}
      </div>
    );
  }
}

export default App;
