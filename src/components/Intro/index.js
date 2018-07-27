import React from 'react';

// Functional component, just a function that returns a react JSX element (using the ())
const Intro = props => (
  <p className="App-intro">
    {props.message}
  </p>
)

export default Intro;