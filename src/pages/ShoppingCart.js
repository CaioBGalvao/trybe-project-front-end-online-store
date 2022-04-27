import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
    goBack = () => {
      const { history: { push } } = this.props;
      push('/');
    };

    render() {
      return (
        <>
          <button type="button" onClick={ this.goBack }>Voltar</button>
          <h1>Carrinho de Compras</h1>
          <h1 data-testid="shopping-cart-empty-message">Seu Carrinho está vazio</h1>
        </>
      );
    }
}

ShoppingCart.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
