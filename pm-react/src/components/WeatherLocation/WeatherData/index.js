import React from 'react'; // siempre va este paso
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
/*import {CLOUD,
		CLOUDY,
		SUN,
		RAIN,
		SNOW,
		WINDY
} from './../../../constant/weathers.js';*/
import './styles.css';

const WeatherData = ({data}) => {
const {temperature, weatherState, humidity, wind} = data;

return (
	<div className='weatherDataCont'>
		<strong><span className='time'><WeatherTemperature 
		temperature= {temperature}
		weatherState = {weatherState}/></span></strong>
		<span><WeatherExtraInfo humidity={humidity} wind={wind}/></span>
	</div>
	)
}

WeatherData.propTypes = { // aquí validamos la data que es un objeto que contiene más de 1 elemento
	data : PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		windy: PropTypes.string.isRequired,
	}), 
};

export default WeatherData;