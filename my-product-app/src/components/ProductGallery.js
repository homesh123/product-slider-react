import React, { useRef } from 'react';
import ProductThumbnail from './ProductThumbnail';

const ProductGallery = ({ products }) => {
  const galleryRef = useRef(null);

  const handleScrollUp = () => {
    const gallery = galleryRef.current;
    if (gallery) {
      gallery.scrollTop -= 55; 
    }
  };

  const handleScrollDown = () => {
    const gallery = galleryRef.current;
    if (gallery) {
      gallery.scrollTop += 55;
    }
  };

  return (
    <div className='thumbs-container'>
      <div className="d-flex flex-column">
        <button className="btn btn-secondary mt-2" onClick={handleScrollUp}>
          &#8593;
        </button>
        <img alt='' src='/assets/images/down-arrow.png' />
        <div ref={galleryRef} className="thumb-overflow" style={{ maxHeight: '300px' }}>
          {products.map((product) => (
            <ProductThumbnail key={product.id} product={product} />
          ))}
        </div>
        <button className="btn btn-secondary mt-2" onClick={handleScrollDown}>
          &#8595;
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
