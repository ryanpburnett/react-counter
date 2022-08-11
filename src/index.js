import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";

import Header from './components/Header/Header';
import Counters from './components/Counters/Counters';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Counters />
    <List />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
