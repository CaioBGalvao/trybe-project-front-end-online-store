import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  handleButtonAddCart = () => {
    const { addToCart, productId } = this.props;
    addToCart(productId);
  }

  render() {
    const { title, img, price } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ img } alt={ title } />
        <p>{ `R$ ${price}` }</p>
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

export default ProductCard;
