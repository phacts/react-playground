import React, { Component } from 'react';
import Loader from '../Loader';
import Intro from '../Intro';
import { Link } from 'react-router-dom';
import './index.css';

// Quick functional component for the list item
const SeriesListItem = ({series}) => (
  <li>
    <Link to={`/series/${series.show.id}`}>
      {series.show.name}
    </Link>
  </li>
)
// Quick functional component for the list
const SeriesList = props =>  {

  return (
    <div>
      <ul className="series-list">
        {props.list.map(item => (
          <SeriesListItem key={item.show.id} series={item} />
        ))}
      </ul>
    </div>
  )
}

class Series extends Component {


  state = {
    series: [],
    seriesName: '',
    isFetching: false,
  }


  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(data => this.setState({ series: data, isFetching: false }));
    // console.log(e);
    // console.log(e.target.value);
  }

  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>

        <Intro message="Here you can find your favorite shows!" />
        <div>
          <input type="text" value={seriesName} onChange={this.onSeriesInputChange} />
        </div>
        { 
          series.length === 0 && seriesName.trim() === ''
          &&
          <p>Search for a series to start</p>
        }
        { 
          series.length === 0 && seriesName.trim() !== ''
          &&
          <p>No TV series have been found with this name</p>
        }
        {
          isFetching && <Loader />
        }
        {
          !isFetching && <SeriesList list={series} />
        }
      </div>
    )
  }
}

export default Series;