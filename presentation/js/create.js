
( function() {

	var slides = [

		{ h : "A tale of two frameworks" , i : "media/js-angular-react-oxford.jpg" },
		{ h : "A tale of two frameworks" , i : "John Coumbe, 26 May 2018" },
		{ h : "Framework?" , t : "Frameworks define structures and scaffolding to help you build a web application." },
		{ h : "Framework?" , t : "You write code that follows the conventions of the framework to build something in a structured way." },
		{ h : "Today" , t : "Todays course will use <span>hands-on exercises</span> to introduce the Javascript frameworks Angular and React." },
		{ h : "Why bother?" , t : "Plain Javascript works for <span>small, new, simple, one-person projects</span> developed by an experienced Javascript developer with an understanding of scope and how to structure code." },
		{ h : "Complexity" , i : "media/Högertrafikomläggningen.jpg" },
		{ h : "Complexity" , t : "Derek Bailey: <span>'Without components our applications become monolithic spaghetti monsters.'</span> Projects become more complex and tangled over time." },
		{ i : "media/jquery.png" , t : "<span>jQuery spaghetti</span>: brittle code that is tightly coupled to the DOM. <span>$('#city').addClass('.oxford')</span>" },
		{ h : "Secret" , t : "<span>The secret to building large things?</span> Make small things and compose/combine them together intelligently."},
		{ h : "Teams" , t : "We need ways to write code in teams. <span>Collaboration</span> is easier if there are shared techniques and a common language"},
		{ h : "Proven techniques" , t : "React is used by WhatsApp and Instagram. Angular is used in Google Cloud Platform and AdWords."},
		{ h : "Scope" , t : "Scope in Javascript is complex: <span>IIFEs, closure, this, bind, module patterns</span>. Javascript frameworks can help."},
		{ i : "media/monkey.gif" , t : "Understanding Javascript frameworks is a big challenging and evolving topic. It is easy to feel overwhelmed." },

		// Things I need to know ==========================================

		{ theme : "Javascript" , i : "media/js.png" },
		{ h : "The challenge" , t : "Framework code may use <span>JS-ES5</span> and <span>JS-ES6</span> and <span>functional methods (map, filter)</span> and <span>Typescript</span> and <span>framework-specific</span> techniques all combined together."},
		{ h : "ES5" , t : "Javascript fundamentals: variables, arrays, functions, objects"},
		{ h : "ES6" , t : "Arrow functions, classes, let, const, destructuring, modules, template-strings."},
		{ h : "Functional" , t : "Map(), reduce(), filter(), forEach(), sort()" },
		{ h : "Pure Functions" , t : "Self-contained predictable code with no side-effects. They do not depend or change anything outside of the function." },
		{ h : "Tools" , t : "Webpack and Babel transpile and bundle code back to a single ES5 file."},

		// COMPONENTS ===================================

		{ theme : "Components", i : "media/components.png" },
		{ h : "Components" , t : "Both Angular and React are component based. Components are a fundamental building block for building applications." },
		{ h : "Components" , t : "A component combines markup, logic, state, and encapsulated styles to create a custom element." },
		{ h : "Components" , t : "Components are <span>composed</span> of instances of other components. Your application is a hierarchy of components." },
		{ h : "A separation of concerns?" , t : "Components combine markup (HTML) and logic (JS) in the same file, challenging traditional approaches." },
		{ h : "State" , t : "Is the state of the application shared across multiple components? Or do you isolate in one place using a state management pattern like <span>Redux</span>" },

		// REACT ANGULAR ===================================

	]

	/*
	//{ t : "'Simplicity is prerequisite for reliability' <span>Edsger Dijkstra</span> 'Simplicity is the ultimate sophistication' <span>Leonardo da Vinci</span>" },
		- React and Angular come in different versions, and different ES5/ES6 syntax.
		- Angular is full framework.
		* React requires additional pieces
		- JS : Avoid tightly coupled code that directly changes DOM : jQuery spaghetti
	*/

	var position = 0;
	var LEFT = 37;
	var RIGHT = 39;

	function draw() {

		var s = $(".slide");
		var slide = slides[ position ];

		s.empty();

		slide.theme ? $("<h2>" , { html: slide.theme }).appendTo( s ) : null;

		slide.h ? $("<h2>" , { html: slide.h }).appendTo( s ) : null;
		slide.i ? $("<img>" , { src: slide.i }).appendTo( s ) : null;
		slide.t ? $("<h4>" , { html: slide.t }).appendTo( s ) : null;
		slide.n ? console.log( slide.n ) : null;


	}

	function setupKeys() {

		$( document ).on( "keyup", function(e) {

			if( e.keyCode === LEFT ) {
				position = Math.max( position-1 , 0 );
			}

			if( e.keyCode === RIGHT ) {
				position = Math.min( position+1 , slides.length-1 );
			}

			draw();

		}) ;
	}

	setupKeys();
	draw();

}) () ;
