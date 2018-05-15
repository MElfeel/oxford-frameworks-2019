
( function() {

	var slides = [

		{ h : "A tale of two frameworks" , i : "media/js-angular-react-oxford.jpg" },
		{ h : "Framework?" , t : "Frameworks define structures and scaffolding to help you build a web application." },
		{ h : "Framework?" , t : "You write code that follows the conventions of the framework to build something in a structured way." },
		{ h : "Today" , t : "Todays course will use <span>hands-on exercises</span> to introduce the Javascript frameworks Angular and React." },
		{ h : "Why bother?" , t : "Plain Javascript works for <span>small, new, simple, one-person projects</span> developed by an experienced Javascript developer with an understanding of scope and how to structure code." },
		{ h : "Complexity" , i : "media/Högertrafikomläggningen.jpg" },
		{ h : "Complexity" , t : "Projects become more complex over time. <span>'Without components our applications become monolithic spaghetti monsters.'</span> Derek Bailey" },
		{ i : "media/jquery.png" , t : "<span>jQuery spaghetti</span>: brittle code that is tightly coupled to the DOM. <span>$('#city').addClass('.oxford')</span>" },
		{ h : "Secret" , t : "<span>The secret to building large things?</span> Make small things and compose/combine them together intelligently."},
		{ h : "Teams" , t : "We need ways to write code in teams. Collaboration is easier if there are shared techniques and a common language"},
		{ h : "Proven techniques" , t : "React is used by Facebook and Instagram"},
		{ h : "Scope" , t : "Managing scope can get very complex: <span>IIFEs, closure, this, bind, module patterns</span>. Frameworks can help with scope."},

		// Things I need to know ==========================================

		{ theme : "Things I need to know" , i : "media/js.png" },
		{ h : "Javascript fundamentals" , t : "Variables, Arrays, functions, objects"},
		{ h : "ES6" , t : "Arrow functions, classes, let, const, destructuring, modules, template-strings."},
		{ h : "Tools" , t : "Webpack and Babel transpile and bundle code back to a single ES5 file."},
		{ h : "Functional" , t : "Map(), reduce(), filter(), forEach(), sort()" },
		{ h : "Pure Functions" , t : "Self-contained predictable code with no side-effects. They do not depend or change anything outside of the function." },

		// COMPONENTS ===================================

		{ theme : "Components", i : "media/components.png" },
		{ h : "Components" , t : "Components are a fundamental building block for building applications." },
		{ h : "Components" , t : "A component combines markup, logic, state, events and parameters to create a custom element." },
		{ h : "A separation of concerns" , t : "Frameworks challenge conventional wisdom on how we group, or separate HTML, CSS, JS and data." },
		{ i : "media/react-book.png" , t : "'That kind of separation is an illusion. The truth is that JS and HTML are tightly coupled.'" },
		{ h : "A separation by components" , t : "Separate the application by components, not by technology." },
		{ h : "Composition" , t : "Components contain instances of other components. Composition is favoured over inheritance." },

		// REACT ANGULAR ===================================
		{ i : "media/monkey.gif" , t : "No one single framework solves all problems. The choice of framework depends on the specific project." }

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

		slide.theme ? $("<h1>" , { html: slide.theme }).appendTo( s ) : null;

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
