import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import { getProductsFromCategoryAndQuery } from './services/api';

export default class App extends Component {
  constructor() {
    super();

    this.chooseCategory = this.chooseCategory.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      searchKey: '',
      resultSearch: [],
      productsOnCart: [],
      foundSomething: true,
    };
  }

  searchProducts = async (event) => {
    event.preventDefault();
    const { searchKey } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(
      undefined,
      searchKey,
    );
    this.setState(
      {
        resultSearch: [...results],
      },
      () => {
        const { resultSearch } = this.state;
        if (resultSearch.length === 0) {
          this.setState({ foundSomething: false });
        } else {
          this.setState({ foundSomething: true });
        }
      },
    );
  };

  async addToCart(productId) {
    const { resultSearch } = this.state;
    const foundProduct = resultSearch.find(
      (resultsProduct) => resultsProduct.id === productId,
    );
    this.setState((prevState) => ({
      productsOnCart: [...prevState.productsOnCart, foundProduct],
    }));
  }

  async chooseCategory({ target }) {
    const categoryId = target.name;
    const { results } = await getProductsFromCategoryAndQuery(categoryId, undefined);
    this.setState({ resultSearch: [...results] });
  }

  render() {
    const { searchKey, resultSearch, productsOnCart, foundSomething } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={ (props) => (
              <Home
                searchKey={ searchKey }
                resultSearch={ resultSearch }
                foundSomething={ foundSomething }
                productsOnCart={ productsOnCart }
                { ...props }
                searchProducts={ this.searchProducts }
                addToCart={ this.addToCart }
                chooseCategory={ this.chooseCategory }
              />
            ) }
          />
          <Route
            path="/cart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                productsOnCart={ productsOnCart }
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
