import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import FormInput from '../components/FormInput';
import ProductCard from '../components/Productcard';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchKey: '',
      resultSearch: [],
      foundSomething: true,
    };
  }

  setInputSearch = ({ target }) => {
    const inputValue = target.value;
    this.setState({ searchKey: inputValue });
  }

  searchProducts = async (e) => {
    e.preventDefault();
    const { searchKey } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(undefined, searchKey);
    this.setState({
      resultSearch: [...results],
    }, () => {
      const { resultSearch } = this.state;
      if (resultSearch.length === 0) {
        this.setState({ foundSomething: false });
      } else {
        this.setState({ foundSomething: true });
      }
    });
  }

  render() {
    const { searchKey, resultSearch, foundSomething } = this.state;
    return (
      <div>
        <form onSubmit={ this.searchProducts }>
          <FormInput
            htmlFor="searchProducts"
            type="text"
            name="searchProducts"
            placeHolder="Digite sua busca"
            value={ searchKey }
            onChange={ this.setInputSearch }
            dataTestid="query-input"
          />

          <button
            type="submit"
            data-testid="query-button"
          >
            Pesquisar
          </button>

        </form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <section className="products">
          {
            foundSomething
              ? resultSearch
                .map((product) => (
                  <ProductCard
                    key={ product.id }
                    title={ product.title }
                    img={ product.thumbnail }
                    price={ product.price }
                  />
                ))
              : <p>Nenhum produto foi encontrado</p>
          }
        </section>
      </div>
    );
  }
}

export default Home;
