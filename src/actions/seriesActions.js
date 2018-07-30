import { GET_SHOW, UNMOUNT_SHOW, UPDATE_QUERY, FETCH_SERIES_LIST, SAVE_SERIES, REMOVE_SAVED_SERIES } from './types.js';

export const getShow = (id) => dispatch => {
  return fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_SHOW,
          payload: data,
        });
      });
}

export const unmountShow = () => dispatch => {
  return dispatch({
    type: UNMOUNT_SHOW,
  });
}

export const updateQuery = (query) => dispatch => {
  // dispatch({
  //   type: UPDATE_QUERY,
  //   payload: query,
  // });
}

export const fetchSeriesList = (query) => dispatch => {
  dispatch({
    type: UPDATE_QUERY,
    payload: query,
  });

  // console.log(query, 'calling fetch series list');
  return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      return dispatch({
        type: FETCH_SERIES_LIST,
        payload: data,
      });
    });
}

export const saveSeries = (series) => dispatch => {
  return dispatch({
    type: SAVE_SERIES,
    payload: series
  });
}

export const removeSavedSeries = (id) => dispatch =>  {
  return dispatch({
    type: REMOVE_SAVED_SERIES,
    payload: id,
  })
}