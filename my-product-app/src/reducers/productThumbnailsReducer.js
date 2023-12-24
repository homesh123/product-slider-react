const initialState = {
    selectedProductId: null
  };
  
const productThumbnailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_THUMBNAIL':
        return { ...state, selectedProductId: action.payload };
      default:
        return state;
    }
  };

export default productThumbnailsReducer;
