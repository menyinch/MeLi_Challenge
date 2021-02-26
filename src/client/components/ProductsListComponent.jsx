// Import Node Modules
import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import ProductComponent from './ProductComponent.jsx';

import './ProductsListComponent.scss';

class ProductsListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      breadcrumb: '',
    };
  }

  componentDidMount() {
    function getQueryParams(qs) {
      qs = qs.split('+').join(' ');

      var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

      while ((tokens = re.exec(qs))) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
      }

      return params;
    }

    var query = getQueryParams(window.location.search);

    if (query.search) {
      axios.get('/api/items?q=' + query.search).then(
        function (response) {
          this.setState({products: response.data.items});
          this.setState({breadcrumb: response.data.breadcrumb});
        }.bind(this)
      );
    }
  }

  render() {
    return (
      <div className='container overflow'>
        <div className='breadcrumb flex flex-justify-start max-width'>
          {this.state.breadcrumb}
        </div>
        <ul className='normalize-list listProduct'>
          {this.state.products.map(_product => (
            <ProductComponent data={_product} key={_product.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsListComponent;
