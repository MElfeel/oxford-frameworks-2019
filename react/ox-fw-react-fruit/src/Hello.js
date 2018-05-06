import React from 'react';

class Draw extends React.Component {

	constructor( props ) {

		super( props );
		this.state = { fruit:[] }

		this.select = this.select.bind( this );
	}

	select(e) {
		let item = e.target.textContent;
		let updated = [ ...this.state.fruit, item ]

		this.setState( { fruit:updated } , function() {
			console.log( this.state.fruit );
		})

	}

	render() {

		return (
      <section>
        <section className="flex">
            { this.props.fruit.map((item,n) => <p onClick={this.select} key={n}> {item} </p>) }
        </section>

        <hr/>

        <section className="flex">
            { this.state.fruit.map((item,n) => <p className="basket" key={n}> {item} </p>) }
        </section>
      </section>
		)
	}
}

export default Draw;