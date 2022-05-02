import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductsDetail extends Component {
goBack = () => {
  const { history: { push } } = this.props;
  push('/');
};

findProduct = () => {
  const { match: { params: { id } }, resultSearch } = this.props;
  return resultSearch.find((whatINeedFound) => whatINeedFound.id === id);
}

render() {
  const product = this.findProduct();
  return (
    <>
      <div>
        <button type="button" onClick={ this.goBack }>Voltar</button>
      </div>
      <div>
        <h1>{`${product.title} - R$ ${product.price}`}</h1>
        <img src={ product.thumbnail } alt={ `imagem do ${product.title}` } />
      </div>
      <div>
        <ul>
          <li data-testid="product-detail-name">{product.title}</li>
          <li>Especificação 2</li>
          <li>Especificação 3</li>
        </ul>

      </div>
    </>
  );
}
}

ProductsDetail.propTypes = {
  resultSearch: PropTypes.arrayOf(PropTypes.shape).isRequired,
  history: PropTypes.shape(PropTypes.shape).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

ProductsDetail.defaultProps = {
  match: null,
};
