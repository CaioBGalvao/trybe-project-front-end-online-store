import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/CategoryList';
import Products from '../components/Products';
import SearchNCart from '../components/SearchNCart';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchKey: '',
    };
  }

  setInputSearch = ({ target }) => {
    const inputValue = target.value;
    this.setState({ searchKey: inputValue });
  };

  render() {
    const {
      history,
      resultSearch,
      foundSomething,
      productsOnCart,
      searchProducts,
      addToCart,
      chooseCategory,
    } = this.props;
    const { searchKey } = this.state;
    const initialMessage = (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>);
    return (
      <div className="HomeDiv">
        <SearchNCart
          history={ history }
          searchKey={ searchKey }
          searchProducts={ searchProducts }
          setInputSearch={ this.setInputSearch }
          productsOnCart={ productsOnCart }
        />
        {initialMessage}
        <CategoryList
          chooseCategory={ chooseCategory }
        />
        <Products
          foundSomething={ foundSomething }
          resultSearch={ resultSearch }
          addToCart={ addToCart }
        />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape(PropTypes.shape).isRequired,
  resultSearch: PropTypes.arrayOf(PropTypes.shape).isRequired,
  foundSomething: PropTypes.bool.isRequired,
  productsOnCart: PropTypes.arrayOf(PropTypes.shape).isRequired,
  searchProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  chooseCategory: PropTypes.func.isRequired,
};
