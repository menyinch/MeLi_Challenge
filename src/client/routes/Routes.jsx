// Import Node Modules
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// Import React Components
import App from '../components/App.jsx';
import Home from '../views/Home.jsx';
import ProductList from '../views/items/ProductList.jsx';
import ProductSelected from '../views/items/ProductSelected.jsx';

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <App>
        <Switch>
          <Route exact path='/items/:id' component={ProductSelected} />
          <Route exact path='/items' component={ProductList} />
          <Route exact path='/' component={Home} />
        </Switch>
      </App>
    );
  }
}

export default Routes;
