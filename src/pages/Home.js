import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/CategoryList';
import Products from '../components/Products';
import SearchNCart from '../components/SearchNCart';

export default class Home extends Component {
  render() {
    const {
      history,
      searchKey,
      resultSearch,
      foundSomething,
      productsOnCart,
      searchProducts,
      addToCart,
      chooseCategory,
      setInputSearch,
    } = this.props;
    const initialMessage = (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>);
    return (
      <div className="container">
        <div className="row">
          <SearchNCart
            history={ history }
            searchKey={ searchKey }
            searchProducts={ searchProducts }
            setInputSearch={ setInputSearch }
            productsOnCart={ productsOnCart }
          />
        </div>
        {initialMessage}
        <div>
          <CategoryList
            chooseCategory={ chooseCategory }
          />
          <Products
            foundSomething={ foundSomething }
            resultSearch={ resultSearch }
            addToCart={ addToCart }
          />
        </div>
      </div>

    );
  }
}

Home.propTypes = {
  history: PropTypes.shape(PropTypes.shape).isRequired,
  searchKey: PropTypes.string.isRequired,
  resultSearch: PropTypes.arrayOf(PropTypes.shape).isRequired,
  foundSomething: PropTypes.bool.isRequired,
  productsOnCart: PropTypes.arrayOf(PropTypes.shape).isRequired,
  searchProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  setInputSearch: PropTypes.func.isRequired,
  chooseCategory: PropTypes.func.isRequired,
};
