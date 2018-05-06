import React from 'react';

// function BookShelf( props ) {
//
// 	return (
// 		<section>
// 		{ props.shelf.map( function( book,i ) {
// 			return <Book key={i} title={book.title} author={book.author}/>
// 		})}
// 		</section>
// 	)
// }

let BookShelf = ({ shelf }) =>

  <section>
    {shelf.map((book, i) =>
      <Book key={i} {...book} />
    )}
  </section>


// function Book( props ) {
// 	return (
// 		<article>
// 			<p>{ props.title }</p>
// 			<p>{ props.author }</p>
// 		</article>
// 	)
// }

let Book = ({ title, author }) =>
  <article>
    <p>{title}</p>
    <p>{author}</p>
  </article>


export default BookShelf;


