import React, { Component } from 'react';
import { render } from 'react-dom';
import BookShelf from './Hello';
import './style.css';

class App extends Component {

  constructor() {

    super();

    this.state = {
      books: [
        { author: "Alan Hollinghurst", title: "The Line of Beauty" },
        { author: "Ian McEwan", title: "Amsterdam" },
        { author: "Kazuo Ishiguro", title: "The Remains of the Day" },
        { author: "Arundhati Roy", title: "The God of Small Things" },
        { author: "Julian Barnes", title: "The Sense of an Ending" }
      ]
    };

    console.log(JSON.stringify(this.state.books))
  }

  render() {
    return (
      <BookShelf shelf={this.state.books} />
    );
  }
}

render(<App />, document.getElementById('root'));
