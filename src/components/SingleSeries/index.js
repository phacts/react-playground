import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Loader from '../Loader';
import { Loader, Card, Divider, Image, Rating, Container } from 'semantic-ui-react';
import { getShow, unmountShow } from '../../actions/seriesActions';
import SavedSeriesToggle from '../SavedSeries/SavedSeriesToggle';
import Breadcrumbs from "../Breadcrumbs";

class SingleSeriesPanel extends PureComponent {

  render() {
    const { show } = this.props;
    return (

      <Container>
        <Card>
          {
            !!show.image
            &&
            <Image alt="Show" src={show.image.medium} />
          }
          <Card.Content>
            <Card.Header>{ show.name }</Card.Header>
            <Card.Meta>
              <span className='date'>Premiered on { show.premiered }</span>
            </Card.Meta>
            <Card.Description>
              Episodes - { show._embedded.episodes.length }
              <Divider />
              <Rating disabled icon='star' defaultRating={(show.rating.average / 2)} maxRating={5} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <SavedSeriesToggle show={show} />
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

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
    if (this.props.show && this.props.show.id && this.props.show.id !== (1 * this.props.match.params.id)) {
      this.props.getShow(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.unmountShow();
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.show && nextProps.show.id && nextProps.show.id !== (1 * this.props.match.params.id)) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    const { show, seriesQuery, match } = this.props;
    const shouldDisplay = show && show.id && show.id === (1 * match.params.id);
    // console.log(this.props);
    return (
      <div>

        <Breadcrumbs linkTitle={seriesQuery} />
        {
          !shouldDisplay && <Loader active />
        }
        {
          shouldDisplay
          &&
          <SingleSeriesPanel show={show} />
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