import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import NumberFormat from 'react-number-format';

import './ProductDetailComponent.scss';

class ProductDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      breadcrumb: '',
    };
  }

  componentDidMount() {
    if (this.props.params.id) {
      axios.get('/api/items/' + this.props.params.id).then(
        function (response) {
          this.setState({item: response.data.item});
          this.setState({breadcrumb: ''});
        }.bind(this)
      );
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='breadcrumb flex flex-justify-start max-width'>
          {this.state.breadcrumb}
        </div>
        <div className='container-product flex flex-column'>
          <div className='detail-product'>
            <div className='detail-product-info flex'>
              <img
                className='detail-product-image'
                src={this.state.item.picture}
                width='100%'
              />
            </div>
            <div className='detail-product-content flex flex-column flex-align-start flex-justify-start max-width'>
              <span className='detail-product-sold'>
                {this.state.item.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
                {this.state.item.sold_quantity} vendidos
              </span>
              <h2 className='detail-product-title'>{this.state.item.title}</h2>
              <span className='detail-product-price'>
                <NumberFormat
                  thousandSeparator={true}
                  value={
                    this.state.item.price ? this.state.item.price.amount : ''
                  }
                  prefix={'$'}
                  displayType={'text'}
                />
              </span>
              <button className='detail-product-button'>Comprar</button>
            </div>
          </div>
          <div className='description-product'>
            <h2>Descripción del producto</h2>
            <div
              className='description-text'
              contentEditable='true'
              role='textbox'
              dangerouslySetInnerHTML={{
                __html: this.state.item.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetailComponent;
