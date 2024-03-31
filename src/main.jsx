
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = document.getElementById('root');


const rootElement = createRoot(root);
rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);

