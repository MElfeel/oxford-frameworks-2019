import React, { Component } from 'react';
import { render } from 'react-dom';
import { SpanishRegions,FilmDirectors } from './Hello';
import './style.css';

render( <SpanishRegions/> , document.getElementById('regions'));
render( <FilmDirectors/> , document.getElementById('directors'));
