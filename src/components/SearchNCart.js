import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

export default class SearchNCart extends Component {
  goCart = () => {
    const { history: { push } } = this.props;
    push('/cart');
  };

  render() {
    const { searchKey, searchProducts, setInputSearch } = this.props;

    return (
      <>
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
        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.goCart }
        >
          Carrinho de Compras

        </button>
      </>
    );
  }
}

SearchNCart.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape).isRequired,
  searchKey: PropTypes.string.isRequired,
  searchProducts: PropTypes.func.isRequired,
  setInputSearch: PropTypes.func.isRequired,
};
