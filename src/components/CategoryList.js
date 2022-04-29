import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryList extends Component {
  constructor() {
    super();

    this.callCategoriesList = this.callCategoriesList.bind(this);

    this.state = {
      loading: false,
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.callCategoriesList();
  }

  async callCategoriesList() {
    this.setState({ loading: true });
    const categoriesList = await getCategories();
    this.setState(
      { categoriesList },
      this.setState({
        loading: false,
      }),
    );
  }

  render() {
    const { loading, categoriesList } = this.state;

    return (
      <div className="CategoryListDiv col-6">
        {!loading && (
          <nav className="CategorySideBar">
            {categoriesList.map((category) => (
              <button
                type="button"
                data-testid="category"
                key={ `${category.name}Button` }
              >
                {category.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    );
  }
}

export default CategoryList;
