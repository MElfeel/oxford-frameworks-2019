import React, { Component } from 'react';
import { render } from 'react-dom';

import { BookShelf } from './bookshelf';
import { books } from './data';

import './style.css';

render( <BookShelf shelf={books} />,document.getElementById("root"))

