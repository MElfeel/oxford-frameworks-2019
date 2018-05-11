// Import stylesheets
import './style.css';

let flight = {
	from : {
        name : "London Gatwick",
        code : "LGW"
    },
	to : {
        name : "Seville",
        code : "SEV"
    },
	airline : "Iberia",
	ticket	: "Business",
    time : {
        depart	: "06.45",
    	arrive	: "10.15"
    },
	price : 205,
	currency : "euros"

}


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