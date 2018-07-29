import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../Series';
import SingleSeries from '../SingleSeries';

import 'whatwg-fetch';
import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Series} />
          <Route exact path="/series/:id" component={SingleSeries} />
        </Switch>
      </div>
    );
  }
}

export default App;
