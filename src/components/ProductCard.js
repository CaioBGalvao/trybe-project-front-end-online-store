import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  handleButtonAddCart = () => {
    const { addToCart, productId } = this.props;
    addToCart(productId);
  }

  render() {
    const { title, img, price, productId } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/productdetail/${productId}` } data-testid="product-detail-link">
          <p>{title}</p>
          <img src={ img } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleButtonAddCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};
