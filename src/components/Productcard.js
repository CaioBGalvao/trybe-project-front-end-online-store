import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { title, img, price, id } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/productdetail/${id}` } data-testid="product-detail-link">
          <p>{title}</p>
          <img src={ img } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
        {/* espero código do Gabriel */}
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
