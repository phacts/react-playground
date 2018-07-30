import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

// Functional component, just a function that returns a react JSX element (using the ())
const Breadcrumbs = props => (
  
  <Breadcrumb>
    <Breadcrumb.Section>
      <Link to='/'>
      
        Back to Search {
          !!props.linkTitle
          &&
          "(" + props.linkTitle + ")"
          }
      </Link>
    </Breadcrumb.Section>
  </Breadcrumb>
)

export default Breadcrumbs;