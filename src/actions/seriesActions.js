import { GET_SHOW, UNMOUNT_SHOW, UPDATE_QUERY, FETCH_SERIES_LIST } from './types.js';

export const getShow = (id) => dispatch => {
  fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_SHOW,
          payload: data,
        });
      });
}

export const unmountShow = () => dispatch => {
  dispatch({
    type: UNMOUNT_SHOW,
  });
}

export const updateQuery = (query) => dispatch => {
  dispatch({
    type: UPDATE_QUERY,
    payload: query,
  });
}

export const fetchSeriesList = (query) => dispatch => {
  // console.log(query, 'calling fetch series list');
  fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      dispatch({
        type: FETCH_SERIES_LIST,
        payload: data,
      });
    });
}