import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class SearchNCart extends Component {
  render() {
    const { searchKey, searchProducts, setInputSearch } = this.props;

    return (
      <form onSubmit={ searchProducts }>
        <FormInput
          htmlFor="searchProducts"
          type="text"
          name="searchProducts"
          placeHolder="Digite sua busca"
          value={ searchKey }
          onChange={ setInputSearch }
          dataTestid="query-input"
        />

        <button type="submit" data-testid="query-button">
          Pesquisar
        </button>
      </form>
    );
  }
}

SearchNCart.propTypes = {
  searchKey: PropTypes.string.isRequired,
  searchProducts: PropTypes.func.isRequired,
  setInputSearch: PropTypes.func.isRequired,
};

export default SearchNCart;
