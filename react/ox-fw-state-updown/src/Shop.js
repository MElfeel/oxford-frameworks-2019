import React from 'react';

class Shop extends React.Component{

	render() {
		let stock = [ "Cheese","Ham","Bread","Milk" ];
		return (
			<section className="shop">
				{ stock.map( (s,n) => <Container key={n} label={s}/> ) }
			</section>
		)
	}
}

class Container extends React.Component {

	constructor( props ) {
		super( props );
		this.state = { n : 0 };

		this.up = this.up.bind(this)
		this.down = this.down.bind(this)
	}

	up() {
		let up = this.state.n + 1;
		this.setState({ n:up  })
	}

	down() {
		let down = Math.max( this.state.n-1 , 0 );
		this.setState({ n:down })
	}

	render() {
		return (
			<Counter label={this.props.label} count={this.state.n} up={this.up} down={this.down} />
		)
	}
}

const Counter = ( props ) => (
// const Counter = ({ label, count, up, down }) => (

	<section className="counter">
		<h4>{props.label}</h4>
		<h2 >{props.count}</h2> 
		<p onClick={props.up}>UP</p>
		<p onClick={props.down}>DOWN</p>
	</section>
)

// style={{ fontSize: props.count+16 }}

export default Shop;
