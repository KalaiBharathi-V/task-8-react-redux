import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Product from './Product';
import Cart from './Cart';
import './App.css';


         
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Shopping App</h1>
        <Product />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
