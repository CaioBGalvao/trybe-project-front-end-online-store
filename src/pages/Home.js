import React, { Component } from 'react';
import { CategoryList } from '../components/CategoryList';

class Home extends Component {
  render() {
    return (
      <div className="HomeDiv">
        <CategoryList />
      </div>
    );
  }
}

export default Home;
