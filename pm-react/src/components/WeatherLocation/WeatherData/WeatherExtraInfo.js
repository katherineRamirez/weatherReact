import React from 'react'; // siempre va este paso
import PropTypes from 'prop-types';
import './styles.css';

/* Cuando queremos crear algo nuevo va entre comillas de lado */
const WeatherExtraInfo = ({humidity, wind}) => ( // le pasamos los parámetros de WeatherData
	<div className='h-v'>
		<p><strong>{`Humedad: ${humidity} % `}</strong></p>
		<p><strong>{`Vientos: ${wind}`}</strong></p>
	</div>

);

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;