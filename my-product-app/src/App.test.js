import { render, screen } from '@testing-library/react';
import ProductThumbnail from './components/ProductThumbnail';
import { Provider } from 'react-redux';
import store from './store';

test('ProductThumbnail renders product name and image', () => {
  const product = { name: 'Product 1', thumbnailImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V1_WG/Peridot/200/AZ2097-8x6_V1_WG_Peridot_Diamond_Diamond.jpg', mainImage: 'https://cdn.azeera.com/product/AZ2097-8x6/AZ2097-8x6_V1_WG/Peridot/200/AZ2097-8x6_V1_WG_Peridot_Diamond_Diamond.jpg' };
  render(
    <Provider store={store}>
    <ProductThumbnail product={product} />
    </Provider>);

  const productImage = screen.getByAltText(product.name);
  expect(productImage).toBeInTheDocument();
});
