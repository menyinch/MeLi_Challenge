import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

import './ProductComponent.scss';

class ProductComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <li className='product-item flex'>
          <Link
            to={`/items/${this.props.data.id}`}
            className='flex flex-align-start max-width'
          >
            <div className='product-item-image flex'>
              <img src={this.props.data.picture} width='180' height='180' />
            </div>
            <span className='product-item-price flex flex-justify-start flex-align-end max-height'>
              <NumberFormat
                thousandSeparator={true}
                value={this.props.data.price.amount}
                prefix={'$'}
                displayType={'text'}
              />
            </span>
            <h3 className='product-item-title flex flex-justify-start flex-align-start max-height'>
              {this.props.data.title}
            </h3>
            <span className='product-item-address flex flex-justify-start flex-align-end max-height'>
              {this.props.data.region}
            </span>
          </Link>
        </li>
      </>
    );
  }
}

export default ProductComponent;
