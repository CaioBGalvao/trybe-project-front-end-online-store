import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';

export default class ProductsDetail extends Component {
goCart = () => {
  const { history: { push } } = this.props;
  push('/cart');
};

goBack = () => {
  const { history: { push } } = this.props;
  push('/');
};

findProduct = () => {
  const { match: { params: { id } }, resultSearch } = this.props;
  return resultSearch.find((whatINeedFound) => whatINeedFound.id === id);
}

handleQuantity = ({ target }) => {
  const nameOfAction = target.name;
  if (nameOfAction === 'quantity') {
    const quantity = parseInt(target.value, 10);
    this.setState({ productQuantity: quantity });
  }

  if (nameOfAction === 'plus') {
    this.setState((prevState) => ({ productQuantity: prevState.productQuantity + 1 }));
  }

  if (nameOfAction === 'minus') {
    this.setState((prevState) => ({ productQuantity: prevState.productQuantity - 1 }));
  }
}

addToCart = () => {
  const { addToCart, match: { params: { id } } } = this.props;
  addToCart(id);
}

render() {
  const product = this.findProduct();
  return (
    <>
      <div>
        <button type="button" onClick={ this.goBack }>Voltar</button>
        <CartButton goCart={ this.goCart } />
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

        <button
          type="button"
          onClick={ this.addToCart }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
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
  addToCart: PropTypes.func.isRequired,
};

ProductsDetail.defaultProps = {
  match: null,
};
