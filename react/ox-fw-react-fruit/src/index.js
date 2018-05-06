import React, { Component } from 'react';
import { render } from 'react-dom';
import Draw from './Hello';
import './style.css';


let basket = [ "apples", "pears","kiwi","peaches","cherries" ];

render(<Draw fruit={basket} />, document.getElementById('root'));

