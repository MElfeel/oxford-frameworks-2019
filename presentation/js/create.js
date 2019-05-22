
import {slides} from "./slides.js" ;

class SlideViewer {
	constructor( slides ) {
		this.draw( slides )
	}

	draw( slides ) {
		this.view = document.querySelector(".presentation");
		this.position = 0;
		this.slides = slides;
		this.setupKeys();
		this.drawSlide()
	}

	setupKeys() {
		document.addEventListener( "keyup" , this.changeSlide.bind( this ))
	}

	changeSlide( e ) {

		if( e.code === "ArrowLeft" ) {
			this.position = Math.max( this.position-1 , 0 );
		}
		if( e.code === "ArrowRight" ) {
			this.position = Math.min( this.slides.length-1 , this.position+1 );
		}

		this.drawSlide()
	}

	drawSlide() {

		let slide = this.slides[ this.position ];

		// Display either text or an image.
		let content = slide.t ? `<p>${ slide.t }</p>` : `<img src="${slide.i}" />`

		let markup = `
		<section class="slide">
			<h2>${ slide.h }</h2>
			${content}
		</section>
		`

		this.view.innerHTML = markup;
	}
}

new SlideViewer( slides )
