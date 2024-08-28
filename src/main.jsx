import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App.jsx';
import store from './store.js';

// Ensure to use the correct root creation method
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
