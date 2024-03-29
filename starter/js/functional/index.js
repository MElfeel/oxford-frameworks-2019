// Import stylesheets
import './style.css';

const draw = s => {
  s = typeof s === "object" ? JSON.stringify(s) : s ;
  document.querySelector("#app").innerHTML += `<p>${s}</p>`;
}


// Functional programming with arrow functions.

let spain = [
	{ image:"sevilla.jpg", name:"Sevilla", region:"Andalusia", popl:0.8, temp:94,  },
	{ image:"valencia.jpg", name:"Valencia", region:"Valencia", popl:1.5, temp:70,  },
	{ image:"barcelona.jpg", name:"Barcelona", region:"Catalonia", popl:4.0, temp:92,  },
	{ image:"granada.jpg", name:"Granada", region:"Andalusia", popl:0.6, temp:72,  },
	{ image:"caceres.jpg", name:"Caceres", region:"Extremadura", popl:0.1, temp:84 },
	{ image:"alicante.jpg", name:"Alicante", region:"Valencia", popl:1.7, temp:82 },
	{ image:"zaragoza.jpg", name:"Zaragoza", region:"Aragon", popl:1.4, temp:64 },
	{ image:"vigo.jpg", name:"Vigo", region:"Galician", popl:0.2, temp:60 }
];

draw( spain );