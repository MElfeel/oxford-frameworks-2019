// Import stylesheets
import './style.css';

// Write Javascript code!

let cars = [
	{ name : "Checker Marathon", price : "$1200" },
	{ name : "Chevrolet Impala", price : "$2400" },
	{ name : "Cutlass Supreme", price : "$4500" },
	{ name : "Ford Galaxie", price : "$5400" },
	{ name : "Grantorino Sport", price : "$7500" }
]

function createCar( auto ) {

	// This multi-line string uses ES6 back-ticks.
	// String interpolation merges in the data.

	let markup = `
		<section class="auto">
			<h2>${ auto.name }</h2>
      <p>${ auto.price }</hp2>
		</section>
	` ;

	document.body.innerHTML += markup;
}

cars.forEach( createCar );
