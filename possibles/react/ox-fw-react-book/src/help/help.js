
import React from 'react';

// ===============================================

// Stateless component, ES5.

function BookShelf( props ) {

	return (
		<section>
		{ props.shelf.map( function( book,i ) {    
			return <Book key={i} title={book.title} author={book.author}/>
		})}
		</section>
	)
}

// ===============================================

// Stateless component, ES6 with destructuring

let BookShelf = ({ shelf }) =>

  <section>
    {shelf.map((book, i) =>
      <Book key={i} {...book} />
    )}
  </section>

// ===============================================

// Stateless component, ES5.

function Book( props ) {

	return (
		<article>
			<h4>{ props.title }</h4>
			<p>{ props.author }</p>
		</article>
	)
}

// ===============================================

// Stateless component, ES6 with destructuring

let Book = ({ title, author }) =>
  <article>
    <p>{title}</p>
    <p>{author}</p>
  </article>

// ===============================================

export default BookShelf;