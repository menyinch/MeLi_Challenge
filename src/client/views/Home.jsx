import React, {Component} from 'react';
import {render} from 'react-dom';

import ProductsListComponent from '../components/ProductsListComponent.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('home');
    return <ProductsListComponent />;
  }
}

export default Home;
