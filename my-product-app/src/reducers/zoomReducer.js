
import { ZOOM_IMAGE } from '../actions/zoomActions';
const initialState = {
    ZOOM_IMAGE : 1
};
  
const zoomReducer = (state = initialState, action) => {
    switch (action.type) {
      case ZOOM_IMAGE:
        return { ...state, zoomLevel: action.payload };
      default:
        return state;
    }
  };

  export default zoomReducer;
