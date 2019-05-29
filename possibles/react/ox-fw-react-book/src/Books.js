// ================================================
import React from 'react';

// Components : functions that IN data and return view (HTML)
// ================================================

// Stateless : no STATE inside components. Written in concise style: functions

let BookShelf = ({ shelf }) =>

  <section>
    {shelf.map((book, i) =>
      <Book key={i} {...book} /> // Spread operator : splits object into params
    )}
  </section>

// ================================================

let Book = ({ title, author }) => // destructuring to assign them to names
  <article>
    <h4>{title}</h4>
    <p>{author}</p>
  </article>

// ================================================
export default BookShelf;
// ================================================