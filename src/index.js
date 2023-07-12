import React from 'react';
import ReactDOM from 'react-dom/client';
import { app } from './firebase.config.js'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './style/index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
/*
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({

})

const store = configureStore({
  reducer
}) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} app={app}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
