import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../Series';
import SingleSeries from '../SingleSeries';
import SavedSeries from '../SavedSeries';

import 'whatwg-fetch';
import './App.css';

import { Provider } from 'react-redux';

import store from '../../store';


class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">TV Series List</h1>
          </header>
          <section>
            <SavedSeries />
          </section>
          <Switch>
            <Route exact path="/" component={Series} />
            <Route exact path="/series/:id" component={SingleSeries} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
