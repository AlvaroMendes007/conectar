import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categoria from './pages/categories';
import Produto from './pages/produtos';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/categoria" component={Categoria}/>
      <Route path="/produto" component={Produto}/>
    </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);
