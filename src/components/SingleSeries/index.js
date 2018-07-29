import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../Loader';
import { getShow, unmountShow } from '../../actions/seriesActions';

class SingleSeries extends Component {
  // state = {
  //   show: null
  // }

  componentDidMount() {
    console.log(this.props.match.params, 'params');
    this.props.getShow(this.props.match.params.id);
    // const { id } = this.props.match.params;
  }

  componentWillUnmount() {
    this.props.unmountShow();
  }

  render() {
    const { show } = this.props;
    console.log(this.props);
    return (
      <div>
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
});

export default connect(mapStateToProps, { getShow, unmountShow })(SingleSeries);