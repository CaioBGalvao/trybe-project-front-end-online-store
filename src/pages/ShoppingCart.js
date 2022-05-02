import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
  goBack = () => {
    const { history: { push } } = this.props;
    push('/');
  };

  filterProductsInfo = () => {
    const { productsOnCart } = this.props;
    const productsIds = productsOnCart
      .map((product) => product.id);

    const filteredIds = productsIds
      .filter((item, pos) => productsIds.indexOf(item) === pos);

    const productsNames = productsOnCart
      .map((product) => product.title);

    const filteredNames = productsNames
      .filter((item, pos) => productsNames.indexOf(item) === pos);

    const productInfoArray = [];
    filteredIds.forEach((id, ind) => {
      let quantity = 0;
      productsIds.forEach((listId) => {
        if (id === listId) quantity += 1;
      });
      productInfoArray.push(
        {
          quantity,
          name: filteredNames[ind],
          id,
        },
      );
    });
    return productInfoArray;
  }

  render() {
    const finalProductInfo = this.filterProductsInfo();
    return (
      <>
        <button type="button" onClick={ this.goBack }>Voltar</button>
        <h1>Carrinho de Compras</h1>
        { finalProductInfo.length === 0
          ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          : finalProductInfo.map((finalProductForm) => (
            <div
              key={ finalProductForm.id }
            >
              <p
                data-testid="shopping-cart-product-name"
              >
                {finalProductForm.name}
              </p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                {finalProductForm.quantity}
              </p>
            </div>
          ))}
      </>
    );
  }
}

ShoppingCart.propTypes = {
  history: PropTypes.shape(PropTypes.shape).isRequired,
  productsOnCart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
