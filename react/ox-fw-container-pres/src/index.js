import React, { Component } from 'react';
import { render } from 'react-dom';
import Spain from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return ( <Spain></Spain> );
  }
}

render(<App />, document.getElementById('root'));
