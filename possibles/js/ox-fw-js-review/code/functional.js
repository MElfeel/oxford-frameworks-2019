
// Functional techniques in ES5 =====================

function getTemp( city ) { 
  return { name:city.name, temp:city.temp };
}

function isHot( city ) {
  return city.temp > 80;
}

let result = spain.filter( isHot ).map( getTemp );

// Functional techniques in ES6 =====================

// Big cities
draw( spain.filter( city => city.popl > 1 ))

// City names
draw( spain.map( city => (city.name)))

// Names of big cities
draw( spain.filter( city => city.popl > 1 ).map( city => (city.name)))

// Sort by temp
draw( spain.sort( (a,b) => (a.temp < b.temp)))

// Total population
draw( spain.map( city => city.popl ).reduce( (a,b) => a+b ))