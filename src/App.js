import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShoppingCart from './pages/ShoppingCart';
import ProductsDetail from './pages/ProductsDetail';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={ (props) => (
              <Home
                { ...props }
              />
            ) }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
              />
            ) }
          />
          <Route
            path="/productdetail/$:id"
            render={ (props) => (
              <ProductsDetail
                { ...props }
              />
            ) }
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
