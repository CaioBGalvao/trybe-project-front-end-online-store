import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { chooseCategory } = this.props;
    return (
      <div className="CategoryListDiv">
        {!loading && (
          <nav className="CategorySideBar">
            {categoriesList.map((category) => (
              <button
                name={ category.id }
                type="button"
                data-testid="category"
                key={ `${category.name}Button` }
                onClick={ chooseCategory }
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

CategoryList.propTypes = {
  chooseCategory: PropTypes.func.isRequired,
};

export default CategoryList;
