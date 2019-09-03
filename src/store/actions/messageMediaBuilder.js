import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';
import { API_GIPHY } from '../../config';

const setData = data => {
  return {
    type: actionTypes.SET_DATA,
    data: data,
  };
};

const fetchDataFailed = () => {
  return {
    type: actionTypes.FETCH_DATA_FAILED,
  };
};

export const resetData = () => {
  return {
    type: actionTypes.RESET_DATA,
  }
};

export const initMessageMedia = (currentPage) => {
  const path = `/gifs/trending?api_key=${API_GIPHY.key}&limit=${API_GIPHY.limit}&offset=${currentPage}`;

  return dispatch => {
    axios.get(path)
      .then(response => {
        dispatch(setData(response.data));
      })
      .catch(error => {
        dispatch(fetchDataFailed());
      });
  };
};

export const updateSelectedImage = selectedImage => {
  return {
    type: actionTypes.UPDATE_SELECTED_IMAGE,
    selectedImage: selectedImage,
  }
};

export const updateSelectedPage = () => {
  return {
    type: actionTypes.UPDATE_SELECTED_PAGE,
  }
};