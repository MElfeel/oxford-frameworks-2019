
import { createStore } from 'redux';

let initialState = { n:1,attempts:0 };

function reducer( state=initialState, action) {

	// if( store ) { console.log( store.getState()) }

	switch (action.type) {
		case 'UP':
			return { n: state.n * 2,attempts:state.attempts+1 };
		case 'DOWN':
			return { n: state.n / 2,attempts:state.attempts+1 };
		default:
			return state;
	}
}

let store = createStore( reducer );

export { store };
