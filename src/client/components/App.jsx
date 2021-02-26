// Import Node Modules
import React, {Component} from 'react';
import {render} from 'react-dom';

// Import React Components
import Header from './Header.jsx';

// Import Style Component
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className='app-content'>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
