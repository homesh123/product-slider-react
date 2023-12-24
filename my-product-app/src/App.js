
import React, {useMemo, useEffect, useState } from 'react';
import ProductGallery from './components/ProductGallery';
import { useSelector,useDispatch } from 'react-redux';
import { zoomImage } from './actions/zoomActions';
import { selectThumbnail } from './actions/productThumbnailActions';
import Slider from 'react-slider';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const products =useMemo(() => {
    return [
    { id: 1, name: 'Product 1', thumbnailImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V1_WG/Peridot/200/AZ2097-8x6_V1_WG_Peridot_Diamond_Diamond.jpg', mainImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V1_WG/Peridot/200/AZ2097-8x6_V1_WG_Peridot_Diamond_Diamond.jpg'},
    { id: 2, name: 'Product 2', thumbnailImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V2_WG/Peridot/200/AZ2097-8x6_V2_WG_Peridot_Diamond_Diamond.jpg', mainImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V2_WG/Peridot/200/AZ2097-8x6_V2_WG_Peridot_Diamond_Diamond.jpg'},
    { id: 3, name: 'Product 3', thumbnailImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V3_WG/Peridot/200/AZ2097-8x6_V3_WG_Peridot_Diamond_Diamond.jpg', mainImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V3_WG/Peridot/200/AZ2097-8x6_V3_WG_Peridot_Diamond_Diamond.jpg'},
    { id: 4, name: 'Product 4', thumbnailImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V4_WG/Peridot/200/AZ2097-8x6_V4_WG_Peridot_Diamond_Diamond.jpg', mainImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V4_WG/Peridot/200/AZ2097-8x6_V4_WG_Peridot_Diamond_Diamond.jpg'},
    { id: 5, name: 'Product 5', thumbnailImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V4_WG/Peridot/200/AZ2097-8x6_V4_WG_Peridot_Diamond_Diamond.jpg', mainImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V4_WG/Peridot/200/AZ2097-8x6_V4_WG_Peridot_Diamond_Diamond.jpg'},
    { id: 6, name: 'Product 6', thumbnailImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V1_WG/Peridot/200/AZ2097-8x6_V1_WG_Peridot_Diamond_Diamond.jpg', mainImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V1_WG/Peridot/200/AZ2097-8x6_V1_WG_Peridot_Diamond_Diamond.jpg'},
    { id: 7, name: 'Product 7', thumbnailImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V3_WG/Peridot/200/AZ2097-8x6_V3_WG_Peridot_Diamond_Diamond.jpg', mainImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V3_WG/Peridot/200/AZ2097-8x6_V3_WG_Peridot_Diamond_Diamond.jpg'},
  ]}, []);

  const selectedProductId = useSelector((state) => state.productThumbnails.selectedProductId);
  //const zoomLevel = useSelector((state) => state.zoom.zoomLevel);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomChange = (newZoomLevel) => {
    setZoomLevel(newZoomLevel);
    dispatch(zoomImage(newZoomLevel)); 
  };

  useEffect(() => {
    dispatch(selectThumbnail(products[0].id));
  }, [dispatch, products]);

  return (
    <div className="prod-contaimer">
      <div className="d-flex justify-content-between">
        <ProductGallery products={products} />
        <div className="main-container">
          <div className="img-container">
            {selectedProductId && (
              <img
                className='mainImg'
                src={products[selectedProductId - 1].mainImage}
                alt={products[selectedProductId - 1].name}
                style={{ transform: `scale(${zoomLevel})` }}
              />
            )}
            </div>
            <div className='slider-area'>
            {selectedProductId && (
              <Slider
              className="horizontal-slider"
              value={zoomLevel}
              onChange={handleZoomChange}
              min={1}
              max={5}
              step={0.1}
              thumbClassName="example-thumb"
              trackClassName="example-track"
              tooltip
            />
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
