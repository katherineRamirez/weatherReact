/* REDUX */
import { SET_CITY } from './../actions';


/* .type porque cambia el nombre de la ciudad */
/* ... strip operation llama a todo lo que tenga state en cualquier lugar como una función */
/* y luego le cambia el valor a city */
/* ejemplo de fución pura */
export const city = (state, action) => {
	switch (action.type) {
		case SET_CITY:
			return { ...state, city: action.value}
		default:
			return state;
	}

}