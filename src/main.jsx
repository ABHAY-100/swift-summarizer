import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './_root/services/store.js';
import ClerkWithRoutes from './ClerkWithRoutes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ClerkWithRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
