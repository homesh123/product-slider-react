import { combineReducers } from 'redux';
import productThumbnailsReducer from './productThumbnailsReducer';
import zoomReducer from './zoomReducer';

export default combineReducers({
  productThumbnails: productThumbnailsReducer,
  zoom: zoomReducer
});