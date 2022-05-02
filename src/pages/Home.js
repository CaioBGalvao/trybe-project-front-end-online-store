import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/CategoryList';
import Products from '../components/Products';
import SearchNCart from '../components/SearchNCart';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchKey: '',
      resultSearch: [],
      foundSomething: true,
    };
  }

  setInputSearch = ({ target }) => {
    const inputValue = target.value;
    this.setState({ searchKey: inputValue });
  };

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

  chooseCategory = async ({ target }) => {
    const categoryId = target.name;
    const { results } = await getProductsFromCategoryAndQuery(categoryId, undefined);
    this.setState({ resultSearch: [...results] });
  }

  render() {
    const { history } = this.props;
    const { searchKey, resultSearch, foundSomething } = this.state;
    const initialMessage = (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>);
    return (
      <div className="HomeDiv">
        <SearchNCart
          history={ history }
          searchKey={ searchKey }
          searchProducts={ this.searchProducts }
          setInputSearch={ this.setInputSearch }
        />
        {initialMessage}
        <CategoryList
          chooseCategory={ this.chooseCategory }
        />
        <Products
          foundSomething={ foundSomething }
          resultSearch={ resultSearch }
        />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape(PropTypes.shape).isRequired,
};
