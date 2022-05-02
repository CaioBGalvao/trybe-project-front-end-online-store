import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class Products extends Component {
productsCardsGenerator = () => {
  const { resultSearch } = this.props;
  resultSearch.map((product) => (
    <ProductCard
      key={ product.id }
      id={ product.id }
      title={ product.title }
      img={ product.thumbnail }
      price={ product.price }
    />
  ));
}

render() {
  const { foundSomething } = this.props;

  return (
    <section className="products">
      {foundSomething ? this.productsCardsGenerator
        : (<p>Nenhum produto foi encontrado</p>
        )}
    </section>
  );
}
}

Products.propTypes = {
  resultSearch: PropTypes.arrayOf(PropTypes.shape).isRequired,
  foundSomething: PropTypes.bool.isRequired,
};
