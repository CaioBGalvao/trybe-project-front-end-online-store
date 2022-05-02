import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class Products extends Component {
  render() {
    const { resultSearch, foundSomething, addToCart } = this.props;

    return (
      <section className="produts">
        {foundSomething ? (
          resultSearch.map((product) => (
            <ProductCard
              key={ product.id }
              productId={ product.id }
              title={ product.title }
              img={ product.thumbnail }
              price={ product.price }
              addToCart={ addToCart }
            />
          ))
        ) : (
          <p>Nenhum produto foi encontrado</p>
        )}
      </section>
    );
  }
}

Products.propTypes = {
  resultSearch: PropTypes.arrayOf(PropTypes.shape).isRequired,
  foundSomething: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
};
