import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './cartReducer';

const Cart = () => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = id => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.title} - ${item.price} x {item.quantity}</span>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
