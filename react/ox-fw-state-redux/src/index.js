import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
import './style.css';

import { connect, Provider } from 'react-redux';
import { store } from './store';

const Draw = ({ count,attempts, up, down }) => {
	return (
		<section>
			<section>{ count }</section>
			<section>{ attempts }</section>
			<button onClick={ up } id="up">Up</button>
			<button onClick={ down } id="down">Down</button>
		</section>
	)
}

// class Draw extends React.Component {
//
// 	constructor( props ) {
// 		super( props )
// 		console.log( "constructor", JSON.stringify( this.props ))
// 	}
//
// 	render() {
// 		return (
// 			<section>
// 				<section>{ this.props.count }</section>
// 				<section>{ this.props.attempts }</section>
// 				<button onClick={ this.props.up } id="up">Up</button>
// 				<button onClick={ this.props.down } id="down">Down</button>
// 			</section>
// 		)
// 	}
// }

const mapStateToProps = (state) => {

  console.log( state );
  return {
    count: state.n,
	attempts: state.attempts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    up: () => {
      dispatch({ type:"UP" })
    },
	down: () => {
      dispatch({ type:"DOWN" })
    }
  }
}

const ContainerDraw = connect( mapStateToProps,mapDispatchToProps)(Draw)

render(
	<Provider store={ store }>
		<ContainerDraw/>
	</Provider>,
document.getElementById( "root"));

