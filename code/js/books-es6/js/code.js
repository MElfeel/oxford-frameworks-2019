
// ES6 JS

class Books{

	constructor( path ) {

		this.path = path;

		this.library = document.querySelector(".library");
		this.getData();
	}

	getData() {

		// Note: value of keyword THIS inside draw will be undefined if forEach called without binding THIS here.
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

		fetch( this.path )
			.then( response => response.json())
			.then( books => books.forEach( this.draw , this ))

			// Alternative : .then( books => books.forEach( this.draw.bind( this ))
	}

	draw( { author,title } ) {

		let markup = `
		<section class="book">
			<h4>${ author }</h4>
			<p>${ title }</p>
		</section>
		` ;
	
		this.library.innerHTML += markup;
	}
}

let books = new Books( "https://my-json-server.typicode.com/johncoumbe/oxfordjson/books" );


