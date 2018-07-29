import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveSeries, removeSavedSeries } from '../../actions/seriesActions';


class SavedSeriesToggle extends Component {

  foundInSaved(saved, id) {
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].id === id)
        return true;
    }
    return false;
  }

  save(show) {
    this.props.saveSeries(show);
  }

  remove(id) {
    this.props.removeSavedSeries(id);
  }
  
  render() {
    const { saved, show } = this.props;
    const isSaved = this.foundInSaved(saved, show.id);
    // console.log(this.props, 'in button');
    return (
      <div>
        {
          isSaved
          &&
          <button onClick={this.remove.bind(this, show.id)}>Forget</button>
        }
        {
          !isSaved
          &&
          <button onClick={this.save.bind(this, show)}>Save</button>
        }
      </div>
    )
  }
}
SavedSeriesToggle.propTypes = {
  saveSeries: PropTypes.func.isRequired,
  removeSavedSeries: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  saved: state.series.saved,
});

export default connect(mapStateToProps, { saveSeries, removeSavedSeries })(SavedSeriesToggle);