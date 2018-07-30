import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../Series';
import SingleSeries from '../SingleSeries';
import SavedSeries from '../SavedSeries';
import { Grid } from 'semantic-ui-react';

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
          <Grid container columns={2}>
            <Grid.Column computer={12} mobile={16}>
              <Switch>
                <Route exact path="/" component={Series} />
                <Route exact path="/series/:id" component={SingleSeries} />
              </Switch>
            </Grid.Column>
            <Grid.Column computer={4} mobile={16}>
              <SavedSeries />
            </Grid.Column>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
