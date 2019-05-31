
// ES5 JS

var books = [
	{ author:"Alan Hollinghurst", title:"The Line of Beauty", price:10, id:"ah_beauty_456712"},
	{ author:"Ian McEwan", title:"Amsterdam", price:12, id:"im_amsterdam_1245"},
	{ author:"Kazuo Ishiguro", title:"The Remains of the Day", price:8, id:"ki_remains_0546712"},
	{ author:"Arundhati Roy", title:"The God of Small Things", price:14, id:"ar_things_12056"},
	{ author:"Julian Barnes", title:"The Sense of an Ending", price:15, id:"jb_ending_674587"}
  ]

function draw( book ) {
	var html = '<section class="book">' + '<h4>' + book.author + '</h4>' + '<p>' + book.title + '</p>' + '</section>' ;
	document.querySelector(".library").innerHTML += html;
}

for ( var j=0; j < books.length; j++ ) {
	draw( books[j] );
}
