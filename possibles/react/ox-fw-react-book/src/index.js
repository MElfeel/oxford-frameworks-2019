import React, { Component } from 'react';
import { render } from 'react-dom';
import BookShelf from './Books';
import { books } from './data';

import './style.css';

render(<BookShelf shelf={books} />, document.querySelector('.page'));
