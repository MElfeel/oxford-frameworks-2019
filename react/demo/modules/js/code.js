
import React from 'react'
import { render } from 'react-dom'

import { BookShelf } from './bookshelf';
import { books } from './data';


render( <BookShelf shelf={books} />,document.getElementById("book"))
