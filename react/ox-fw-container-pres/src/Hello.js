import React from 'react';

class Spain extends React.Component {

	constructor( props ) {
		super( props );
		this.state = { people : [] };

		this.path = `https://randomuser.me/api/?results=10`;
	}

  componentDidMount() {

     fetch( this.path )

			.then( response =>response.json())
			.then( data => {
        let people = data.results;
				this.setState( { people } )
        }
			)
	}

	render() {
    //return ( <p></p> )
		return ( <List people={this.state.people} /> )
	}

}

const List = ({ people }) => (
	<section className="flex">
		{ people.map((person,n) =>
			<section className="panel" key={n}>
				<p>{ person.email }</p>
				<p>{ person.gender }</p>
			</section>
		)}
	</section>
)

export default Spain;
