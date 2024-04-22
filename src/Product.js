import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartReducer';
import productsData from './productsData';

const Product = ({ product }) => {
    const products = productsData.find(product => product.id === product);

  if (!products) {
    return <div>Product not found!</div>;
  }
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className='product'>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
