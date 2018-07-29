import React from 'react';
import { Link } from 'react-router-dom';

// Functional component, just a function that returns a react JSX element (using the ())
const Breadcrumbs = props => (
  <Link to='/'>
    Back to Search {
      !!props.linkTitle
      &&
      "(" + props.linkTitle + ")"
      }
  </Link>
)

export default Breadcrumbs;