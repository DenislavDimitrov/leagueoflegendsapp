import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Navigation/Navbar'
import Footer from './components/footer/Footer'
import Navigation from './components/Navigation'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Footer />
      </BrowserRouter>
    </App>

  </React.StrictMode>,
  document.getElementById('root')
);


