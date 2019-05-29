// ES6 arrow-functions

var battle = function() {
	return 1066;
}

var battle = () => 1066;

function double( n ) {
	return n*2;
}

var double = function( n ) {
	return n*2;
}

// More concise ES6 arrow functions.
// Only the argument and return statement are defined.

var double = n => n*2;
double(2);

// Adding a return keyword requires curly braces
var double = n => { return n*2; }

// This would return undefined
var double = n => { n*2 }

// If you pass more than 1 argument, you need to add paretheses

var add = (a, b) => a + b;

// A function with NO arguments needs paretheses

var getYear = () => "2016";

// To return an object, wrap {} in ()

var createCity = ( c,n ) => ( {city:c, nation:n })

console.log( createCity("Oxford","UK"));

// An anonymous arrow function
(a,b) => a*b

// A self-executing anonymous arrow function
((a,b) => a*b) (4,2)