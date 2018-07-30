import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSeriesList, updateQuery } from '../../actions/seriesActions';
// import Loader from '../Loader';
import { Loader, Input } from 'semantic-ui-react';
import Intro from '../Intro';
import { Link } from 'react-router-dom';
import './index.css';
import SavedSeriesToggle from '../SavedSeries/SavedSeriesToggle';

// Quick functional component for the list item
const SeriesListItem = ({series}) => (
  <li>
    <Link to={`/series/${series.show.id}`}>
      {series.show.name}
    </Link>
    <SavedSeriesToggle show={series.show} />
  </li>
)
// Quick functional component for the list
const SeriesList = props =>  {
// console.log(props, 'props in series list');
  const { list } = props;
  return (
    <div>
      <ul className="series-list">
        {list.map(item => (
          <SeriesListItem key={item.show.id} series={item} />
        ))}
      </ul>
    </div>
  )
}

class Series extends Component {


  // state = {
  //   series: [],
  //   seriesName: '',
  //   isFetching: false,
  // }

  // componentWillMount() {
  //   console.log(this.props.seriesQuery);
  //   this.props.fetchSeriesList(this.props.seriesQuery);
  // }
  


  onSeriesInputChange = e => {
    this.props.updateQuery(e.target.value); // would setting this.props.seriesQuery suffice?
    
    // Dispatch our fetch request 
    this.props.fetchSeriesList(e.target.value);

    // console.log(e);
    // console.log(e.target.value);
  }

  render() {
    const { series, seriesQuery, isFetching } = this.props;
    // console.log(series, seriesQuery, isFetching, 'series, query, and fetching');
    return (
      <div>

        <Intro message="Here you can find your favorite shows!" />
        <div>
          <Input value={seriesQuery} onChange={this.onSeriesInputChange} />
        </div>
        { 
          series.length === 0 && seriesQuery.trim() === ''
          &&
          <p>Search for a series to start</p>
        }
        { 
          series.length === 0 && seriesQuery.trim() !== ''
          &&
          <p>No TV series have been found with this name</p>
        }
        {
          isFetching && <Loader active />
        }
        {
          !isFetching && <SeriesList list={series} />
        }
      </div>
    )
  }
}
Series.propTypes = {
  fetchSeriesList: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
  series: PropTypes.array.isRequired,
  seriesQuery: PropTypes.string,
  isFetching: PropTypes.bool,
}

const mapStateToProps = state => ({
  series: state.series.series,
  seriesQuery: state.series.seriesQuery,
  isFetching: state.series.isFetching,
});

export default connect(mapStateToProps, { fetchSeriesList, updateQuery })(Series);