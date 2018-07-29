import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeSavedSeries } from '../../actions/seriesActions';

class SavedSeries extends Component {
  
  render() {
    const { saved } = this.props;

    const SavedList = saved.map(show => (
      <li key={show.id}>
        <Link to={`/series/${show.id}`}>
          {show.name}
        </Link>
      </li>
    ));

    // console.log(this.props);
    return (
      <div>
        {
          !saved.length
          && 
          <p>Saved series will show up here.</p>
        }
        {
          !!saved.length
          &&
          <ul>
            { SavedList }
          </ul>
        }
        <hr />
      </div>
    )
  }
}
SavedSeries.propTypes = {
  removeSavedSeries: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  saved: state.series.saved,
});

export default connect(mapStateToProps, { removeSavedSeries })(SavedSeries);