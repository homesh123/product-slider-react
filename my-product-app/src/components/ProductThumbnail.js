import React from 'react';
import { useDispatch } from 'react-redux';
import { selectThumbnail } from '../actions/productThumbnailActions';

const ProductThumbnail = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectThumbnail(product.id));
  };

  return (
    <figure className="thumbnail-wrapper" onClick={handleClick}>
      <img src={product.thumbnailImage} alt={product.name} />
    </figure>
  );
};

export default ProductThumbnail;
