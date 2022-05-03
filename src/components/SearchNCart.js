import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';

export default class SearchNCart extends Component {
  goCart = () => {
    const { history: { push } } = this.props;
    push('/cart');
  };

  render() {
    const { searchKey, searchProducts, setInputSearch } = this.props;

    return (
      <>
        <form className="col-6">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search" />
            </span>
            <input
              className="form-control"
              aria-label="Digite sua busca"
              aria-describedby="basic-addon1"
              type="text"
              name="searchProducts"
              placeholder="Digite sua busca"
              value={ searchKey }
              onChange={ setInputSearch }
              data-testid="query-input"
            />
          </div>
        </form>
        <button
          onClick={ searchProducts }
          type="button"
          data-testid="query-button"
          className="btn btn-primary form-control col-6 w-25"
        >
          Pesquisar
        </button>
        <CartButton goCart={ this.goCart } />
      </>
    );
  }
}

SearchNCart.propTypes = {
  history: PropTypes.shape(PropTypes.shape).isRequired,
  searchKey: PropTypes.string.isRequired,
  searchProducts: PropTypes.func.isRequired,
  setInputSearch: PropTypes.func.isRequired,
};
