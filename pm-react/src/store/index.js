/* Store se crea solo 1 vez de esta manera para manejar los estados desde aquí */
import { createStore } from 'redux'; 
import { city } from './../reducers/city';

/* solo para mirar estado fijo */
const initialState = {
	city: 'Buenos Aires'
};

const reducer = (state, action) => {
	return state;
}

/* {} representa los reducer de react
export const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()); */ 

export const store = createStore(city, initialState, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());