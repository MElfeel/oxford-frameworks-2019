import './style.css';

const draw = s => {
  s = typeof s === "object" ? JSON.stringify(s) : s ;
  document.querySelector("#app").innerHTML += `<p>${s}</p>`;
}

// ==========================================================

// ARROW FUNCTIONS 

// A simple arrow function has a name, argument and return value.
let double = n => n * 2;
double(2);

// A multiple-line arrow function requires brackets and a return statement
let debugDouble = n => {
	let result = n*2;
	return result;
}
debugDouble(2);

// If you pass more than 1 argument, you need to add paretheses
let add = (a, b) => a + b;

// A function with NO arguments needs paretheses.
let getYear = () => "2016";

// An arrow function that does nothing
let doNothing = () => null

// To return an object, wrap {} in ()
let createCity = (c, n) => ({ city: c, nation: n })

draw(createCity("Oxford", "UK"));

// ==========================================================

// Arrow functions use lexical binding: the value of THIS inside
// an arrow function is based on its syntactic context not how it is called.

class Animal {

	constructor(s) {
		this.sound = s;
    this.speak();
		window.setTimeout( this.speak , 4 )
	}

	// speak() {
  speak = () => {
		draw( this.sound );
	}

}

let duck = new Animal("Quack");

// ==========================================================

// Template literals : allow multiple line variables with interpolation

let city = { name:"Seville", temp:88 };

let markup = `
      <section class="city">
          <p>${city.name}</p>
          <p>${city.temp}&deg;</p>
      </section>
  ` ;

console.log( markup );

// ==========================================================

// Destructuring : syntax for extracting simple values from complex arrays
// and objects.

let movie = {
	title: "Taxi Driver",
	actor: "Robert De Niro",
	director: "Martin Scorsese",
	from: "Columbia Pictures"
}

let { title, actor } = movie;
let { director: d, from: f } = movie;

console.log(title, actor, d, f);

let about = ({ actor, title, director, from }) =>
`<p>${actor} starred in ${title} directed by ${director} from ${from}</p>`;

draw( about(movie))

let makeCity = (city, temp) => ({ city, temp });
let { city, temp } = makeCity("Seville", 45);

// ==========================================================

// Spread operator makes true copies if arrays and objects.

let film = { title: "North By Northwest", actor: "Cary Grant" };
let movie = { ...film, oscar: "Best Actor", year: 1957 };

draw( movie );

let holiday = [{ city: "Paris", year: 2014 }, { city: "Oslo", year: 2017 }]

let hols = holiday.map(ob => ({ ...ob, year:ob.year+1 }));

draw(hols);

// ==========================================================