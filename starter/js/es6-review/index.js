import './style.css';

const draw = s => {
  s = typeof s === "object" ? JSON.stringify(s) : s ;
  document.querySelector("#app").innerHTML += `<p>${s}</p>`;
}

draw("Javascript ES6");

// ==========================================================

// ARROW FUNCTIONS 

class Animal {

	constructor(s) {
		this.sound = s;
    // this.speak();
	}

	speak() {
		draw( this.sound );
	}

}

let duck = new Animal("Quack");

// ==========================================================

// Template literals : allow multiple line variables with interpolation

let city = { name:"Seville", temp:88 };

/*
<section class="city">
    <p>Seville</p>
    <p>88</p>
</section>
*/


// ==========================================================

// Destructuring 

let movie = {
	title: "Taxi Driver",
	actor: "Robert De Niro",
	director: "Martin Scorsese",
	from: "Columbia Pictures"
}

// ==========================================================

// Spread operator 

let film = { title: "North By Northwest", actor: "Cary Grant" };
let holiday = [{ city: "Paris", year: 2014 }, { city: "Oslo", year: 2017 }]

// ==========================================================