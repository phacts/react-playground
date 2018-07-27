import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
  <div>
    <img
      style={ {width: 60 } }
      src={loaderSrc}
      alt="loading..."
    />
  </div>
);

export default Loader;