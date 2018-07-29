import { GET_SHOW, UNMOUNT_SHOW, FETCH_SERIES_LIST, UPDATE_QUERY, SAVE_SERIES, REMOVE_SAVED_SERIES } from '../actions/types';

const initialState = {
  series: [],
  seriesQuery: '',
  isFetching: false,
  show: {},
  saved: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_SERIES_LIST:
      return {
        ...state,
        isFetching: false,
        series: action.payload,
      };

    case GET_SHOW:
      return {
        ...state,
        isFetching: false,
        show: action.payload,
      };
    
    case UNMOUNT_SHOW:
      return {
        ...state,
        isFetching: false,
        show: {}, // remove the show
      };

    case UPDATE_QUERY:
      return {
        ...state,
        seriesQuery: action.payload,
        isFetching: true,
      }

    case SAVE_SERIES:
      return {
        ...state,
        saved: state.saved.concat(action.payload),
      }
    case REMOVE_SAVED_SERIES:
      return {
        ...state,
        saved: state.saved.filter(show => show.id !== action.payload),
      }

    default:
      return state;
  }
};