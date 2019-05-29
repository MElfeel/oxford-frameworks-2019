
// Read JSON data from another domain using Fetch

import { draw } from './utils.js';

function getData() {

  let url = "https://randomuser.me/api/?results=10";

  fetch(url)
    .then( r => r.json())
    .then( d => d.results.map( p => 
    p.name.first + " " + p.name.last ))
    .then( d => draw( d ))

}

export { getData };