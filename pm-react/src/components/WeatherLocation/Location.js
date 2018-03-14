import React from 'react'; // siempre va este paso
import PropTypes from 'prop-types';

/* Ejemplo de una línea
const Location = () => (
	<div>
		<h1>
			Santiago
		</h1>
	</div>
);*/

/* Vamos a pasar nuestra city de WeatherLocation 1ra. forma */
const Location = (props) => {
const city = props.city;

	return (
		<div>
			<h1>
			 {city}
			</h1>
		</div>
	);
}

/*const Location = ({city}) => {
//const city = props.city;
//const {city} = props;

		<div>
			<h1>
			 {city}
			</h1>
		</div>
};*/

Location.propTypes = {
	city: PropTypes.string.isRequired,
}

export default Location;