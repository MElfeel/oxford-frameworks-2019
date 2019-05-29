import React, { Component } from 'react';
import { render } from 'react-dom';
import Shop from './Shop';
import './style.css';

let basket = [ "Cheese","Ham","Bread","Milk" ];

render(<Shop stock={basket} />, document.getElementById('root'));
