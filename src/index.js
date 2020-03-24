import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import CartProvider from './providers/cart/cart.provider'
import DirectoryProvider from './providers/directory/directory.provider'

import './index.css';
import App from './App';

ReactDOM.render(
  <DirectoryProvider>
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </CartProvider>
  </DirectoryProvider>,
  document.getElementById('root')
);
