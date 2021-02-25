// Import Node Modules
import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='app-content'>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
