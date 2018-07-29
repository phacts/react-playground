import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../Loader';
import { getShow, unmountShow } from '../../actions/seriesActions';
import SavedSeriesToggle from '../SavedSeries/SavedSeriesToggle';
import Breadcrumbs from "../Breadcrumbs";

class SingleSeries extends Component {
  // state = {
  //   show: null
  // }

  componentDidMount() {
    // console.log(this.props.match.params, 'params');
    this.props.getShow(this.props.match.params.id);
    // const { id } = this.props.match.params;
  }

  componentDidUpdate() {
    this.props.getShow(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.unmountShow();
  }

  shouldComponentUpdate(nextProps) {
    if ((this.props.show) && nextProps.show === this.props.show) {
      return false;
    }
    return true;
  }

  render() {
    const { show, seriesQuery } = this.props;
    // console.log(this.props);
    return (
      <div>

        <Breadcrumbs linkTitle={seriesQuery} />
        {
          (!show || !show.id) && <Loader />
        }
        {
          show && show.id
          &&
          <div>
            <p>{show.name}</p>
            <p>Premiered - { show.premiered }</p>
            <p>Rating - { show.rating.average }</p>
            <p>Episodes - { show._embedded.episodes.length }</p>
            {
              show && show.image &&
              <p>
                <img alt="Show" src={show.image.medium} />
              </p>
            }
            <SavedSeriesToggle show={show} />
          </div>
        }
      </div>
    )
  }
}
SingleSeries.propTypes = {
  getShow: PropTypes.func.isRequired,
  unmountShow: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  show: state.series.show,
  seriesQuery: state.series.seriesQuery,
});

export default connect(mapStateToProps, { getShow, unmountShow })(SingleSeries);