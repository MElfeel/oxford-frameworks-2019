import React, { Component } from 'react';
import { render } from 'react-dom';
import BookShelf from './Hello';
import './style.css';

// =======================================================

class App extends Component {

  constructor( props ) {

    super( props );
    this.state = {};

  }

  render() {
    return (
      <BookShelf shelf={this.props.books} />
    );
  }
}

// =======================================================

let books = [
  { author: "Alan Hollinghurst", title: "The Line of Beauty" },
  { author: "Ian McEwan", title: "Amsterdam" },
  { author: "Kazuo Ishiguro", title: "The Remains of the Day" },
  { author: "Arundhati Roy", title: "The God of Small Things" },
  { author: "Julian Barnes", title: "The Sense of an Ending" }
];

// =======================================================

render(<App books={books} />, document.getElementById('root'));

// =======================================================
