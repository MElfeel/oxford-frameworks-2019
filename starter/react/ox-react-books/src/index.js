import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// ==============================================================

class BookShop extends Component {

  constructor() {

    super();

    this.state = {
      books: [],
      basket: []
    };
  }


  render() {

    return (
        <section className="library">
          <Book/>
        </section>
    );
  }
}

// ==============================================================

const Book = () =>

  <section className="book">
    <h4>Alan Hollinghurst</h4>
    <p>The Line of Beauty</p>
  </section>

// ==============================================================


let el = document.getElementById('root');

render(<BookShop path="https://my-json-server.typicode.com/johncoumbe/oxfordjson/books" />, el);

// ==============================================================