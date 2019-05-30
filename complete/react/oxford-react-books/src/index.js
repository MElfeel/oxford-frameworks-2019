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

  componentDidMount() {

    fetch(this.props.path)
      .then(response => response.json())
      .then(books => this.setState({ books: books }))

  }

  select = b => {
    let _books = [...this.state.books];
    _books = _books.filter(book => book.id !== b.id);
    this.setState({ books: _books })

    let _basket = [...this.state.basket, {...b} ]
    this.setState({ basket: _basket })
  }

  render() {

    return (
      <section>
        <section className="library">
          {this.state.books.map((b, n) => <Book key={b.id} select={this.select} book={b} />)}
        </section>
        <hr/>
        <section className="library basket">
          {this.state.basket.map((b, n) => <Book key={b.id} book={b} select={ () => null }/>)}
        </section>
      </section>
    );
  }
}

// ==============================================================

const Book = ({ book, select }) =>

  <section className="book" onClick={() => select(book)} >
    <h4>{book.author}</h4>
    <p>{book.title}</p>
  </section>

// ==============================================================


let el = document.getElementById('root');
render(<BookShop path="https://my-json-server.typicode.com/johncoumbe/oxfordjson/books" />, el);

// ==============================================================