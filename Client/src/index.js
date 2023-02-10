import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers';

const store = createStore( Reducers, compose(applyMiddleware(thunk)))
root.render(
  <Provider store={store}>
  <div>
    <App/>
  </div>
  </Provider>
);
const root = ReactDOM.createRoot(document.getElementById('root'));

reportWebVitals();
