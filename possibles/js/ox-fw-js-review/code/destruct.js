// complete.js

// ES6 Destructuring of the flight object in data.js

let { name,code } = flight.from;
console.log( name,code );

let { name:toName,code:toCode } = flight.to;
console.log( toName,toCode );

let { time,ticket } = flight;
console.log( time,ticket  );

let { carhire = "Avis", airline = "BA" } = flight;
console.log( carhire, airline )

let { price:p = 150 , currency:c ="pounds" } = flight;
console.log( p,c );