import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <button
          data-testid="shopping-cart-button"
          onClick={ this.goCart }
          type="button"
          className="btn btn-outline-dark col-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart m-1" viewBox="0 0 16 16">
            <path
              d="M0 1.5A.5.5 0 0 1 .5
           1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
           .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607
           1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5
          12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
          1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          Shopping Cart
        </button>
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
