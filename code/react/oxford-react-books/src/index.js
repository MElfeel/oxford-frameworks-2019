import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// ==============================================================

class BookShop extends Component {

  constructor() {

    super();

    this.state = {
      books: []
    };
  }

  componentDidMount() {

    		fetch( this.props.path )
          .then( response => response.json())
          .then( books => this.setState( { books:books }))

  }

  remove = id => {
    let copy = [ ...this.state.books ];
    copy = copy.filter( book => book.id !== id );
    this.setState( { books:copy })
  }

  render() {

    return (
       <section className="library">

        { this.state.books.map( (b,n) => <Book key={b.id} remove={this.remove} book={b}/> ) }

        </section>
    );
  }
}

// ==============================================================

const Book = ({ book,remove }) => 

  <section className="book" onClick={ () => remove( book.id )} >
    <h4>{ book.author }</h4>
    <p>{ book.title }</p>
  </section>

// ==============================================================


let el = document.getElementById('root');
render(<BookShop path="https://my-json-server.typicode.com/johncoumbe/oxfordjson/books"/>, el );

// ==============================================================