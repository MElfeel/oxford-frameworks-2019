
import React from 'react'
import { Book } from "./book";

let BookShelf = ({ shelf }) =>

	<section>
		{ shelf.map( (book,i) =>
			<Book key={i} {...book} />
		)}
	</section>


export { BookShelf };
