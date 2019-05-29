
import './style.css';

import { flight, spain } from './code/data.js';
import { draw } from './code/utils.js';

import { getData } from './code/fetch.js';

function getRegion( city ) { return city.region };

draw( getRegion( spain[0]));

var regions = spain.map( getRegion );

draw( regions );

function getCity( city ) { return { name:city.name, temp:city.temp }}

draw( spain.map( getCity ));

function isHot( city ) { return city.temp > 80 }

draw( spain.filter( isHot ))

draw( spain.map( getCity ).filter( isHot ));

function getPop( city ) { return city.popl }

draw( spain.map( getPop ))

function add(a,b) { return a+b }

draw( spain.map( getPop ).reduce( add ));

// ES6 ================================================

// ES6 arrow function : removed function, (), {}, return 

let _getRegion = city => city.region ;

let _isHot = city => city.temp > 80 ;

draw( spain.filter( isHot ).map( _getRegion ));

// Inline anonymous arrow functions:

draw( spain.filter( city => city.temp > 80 ).map( city => city.region ));










