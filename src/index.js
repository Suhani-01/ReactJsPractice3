import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store.js' 

//importing store

//wrapped app component inside provider so that app component will be able to use all the states that we are maintaing inside the store

//hence everything inside the store component will be accessible throughout the application

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //wrapping app inside provider
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
