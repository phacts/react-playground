import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../Series';
import SingleSeries from '../SingleSeries';
import SavedSeries from '../SavedSeries';
import { Grid } from 'semantic-ui-react';
// import SidebarMenu from '../SidebarMenu';

import 'whatwg-fetch';
import './App.css';

import { Provider } from 'react-redux';

import store from '../../store';
import SidebarMenuFixed from '../SidebarMenu/menu';
import NavbarExample from '../SidebarMenu/navbar';
import PrimarySidebarFixed from '../SidebarMenu/primary';


class App extends Component {
  render() {

    const primaryWidth = 80;
    const secondaryWidth = 210;

    const styles = {
      container: {
        sidebarPrimary: {
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          top: '0px',
          bottom: '0px',
          left: '0px',
          width: primaryWidth + 'px',
          background: 'rgb(27, 28, 29)',
          // background: '#ffffff',
          overflowX: 'hidden',
        },
        sidebarSecondary: {
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          top: '0px',
          bottom: '0px',
          left: primaryWidth + 'px',
          width: secondaryWidth + 'px',
          background: 'rgb(27, 28, 29)',
          overflowX: 'hidden',
        },
        mainContent: {
          display: 'flex',
          marginLeft: (primaryWidth + secondaryWidth + 1) + 'px',
          flexDirection: 'column',
        },
        contentGrid: {
          padding: '1em',
        },
      },
    };

    return (
      <Provider store={store}>
        <div>
          <div style={styles.container.sidebarPrimary}>
            <PrimarySidebarFixed />
          </div>
          <div style={styles.container.sidebarSecondary}>
            <SidebarMenuFixed />
          </div>
          <div style={styles.container.mainContent}>
            <Grid columns={1}>
              <Grid.Column>
                <NavbarExample />

                <Grid style={styles.container.contentGrid} container columns={2}>
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
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
