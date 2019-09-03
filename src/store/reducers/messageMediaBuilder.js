import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  data: null,
  error: false,
  selectedImage: null,
  selectedPage: 0,
};

const setData = (state, action) => {
  return updateObject(state, {data: action.data});
};

const fetchDataFailed = (state, action) => {
  return updateObject(state, {error: true})
}

const updateSelectedImage = (state, action) => {
  return updateObject(state, {selectedImage: action.selectedImage});
};

const updateSelectedPage = (state, action) => {
  return updateObject(state, {selectedPage: (state.selectedPage + 1)});
};

const resetData = (state, action) => {
  return updateObject(state, {data: null});
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.RESET_DATA: return resetData(state, action);
    case actionTypes.SET_DATA: return setData(state, action);
    case actionTypes.FETCH_DATA_FAILED: return fetchDataFailed(state, action);
    case actionTypes.UPDATE_SELECTED_IMAGE: return updateSelectedImage(state, action);
    case actionTypes.UPDATE_SELECTED_PAGE: return updateSelectedPage(state, action);
    default: return state;
  }
};

export default reducer;