import React from 'react';

class Spain extends React.Component {

	constructor( props ) {
		super( props );
		this.state = { spain : [] };

		this.path = `./spain.json`;
	}

	async componentDidMount() {

     await fetch( this.path , {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }

      })

			.then( response =>
				// Returns a promise that resolves with a JSON object.
				response.json()
			)
			.then( spain =>
				this.setState( { spain } )
			)
	}

	render() {
		return ( <List spain={this.state.spain} /> )
	}

}

const List = ({ spain }) => (
	<section className="flex">
		{ spain.map((city,n) =>
			<section className="panel" key={n}>
				<img src={ "media/"+ city.image }/>
				<p>{ city.name }</p>
				<p>{ city.region }</p>
				<p>{ city.popl }</p>
				<p>{ city.temp }</p>
			</section>
		)}
	</section>
)

export default Spain;
