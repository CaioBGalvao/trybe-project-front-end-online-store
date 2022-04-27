import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, img, price } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ img } alt={ title } />
        <p>{ `R$ ${price}` }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
