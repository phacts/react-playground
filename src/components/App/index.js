import React, { Component } from 'react';
import Intro from '../Intro';

import Series from '../../containers/Series';

import 'whatwg-fetch';

// import logo from './logo.svg';
import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find your favorite shows!" />


        <Series />
      </div>
    );
  }
}

export default App;
