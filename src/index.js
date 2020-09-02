import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Categoria from './pages/categories';
// import Produto from './pages/produtos';
import Nav from './components/Nav';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    {/* <Produto /> */}
    <Categoria />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
