import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './Productcard';

class Products extends Component {
  render() {
    const { resultSearch, foundSomething } = this.props;

    return (
      <section className="products">
        {foundSomething ? (
          resultSearch.map((product) => (
            <ProductCard
              key={ product.id }
              title={ product.title }
              img={ product.thumbnail }
              price={ product.price }
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
};

export default Products;
