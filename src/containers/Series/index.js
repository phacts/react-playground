import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

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
    console.log(e);
    console.log(e.target.value);
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