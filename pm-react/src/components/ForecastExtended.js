import React, {Component} from 'react'; // se coloca Component en llaves cuando se ejecuta un componente de clase (class ForecastExtended)
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast'
import './../App.css';
import './../media.css';


const api_key = '574b280b768b794f93cd4b0dd7085d38';

const url = 'http://api.openweathermap.org/data/2.5/forecast';


class ForecastExtended extends Component{
	constructor(){
		super();
		this.state = { // se hace solo una vez
			forecastData: null
		}
	}

/* queremos que se muestre después de render (después de hacer click)*/
componentDidMount() { // actualiza solo una vez
	this.updateCity(this.props.city);
}

componentWillReceiveProps(nextProps) {// nextProps (se coloca junto a este componente) ejecuta una propiedad y recibe la proxima cada vez que haga click va a actualizar la información
	if(nextProps.city !== this.props.city){ // compara las ciudades si son distintas la limpia con null y luego
		this.setState({forecastData: null}); // la llena con el llamado de la api.
		this.updateCity(nextProps.city); // setState llama a la api
	}
}

updateCity = city => {
	const url_forecast = `${url}?q=${ city }&appid=${api_key}&units=metric`;

	fetch(url_forecast).then(data => (data.json())
	).then(weather_data => {
		console.log(weather_data);
		const forecastData = transformForecast(weather_data); // pasando segundo estado

		this.setState({forecastData})
	}
	)
}

renderForecastItemDays(forecastData) {
	return forecastData.map(forecast => ( //parámetro forecast cualquier nombre
	<ForecastItem
	key={`${forecast.weekDay}${forecast.hour}`}
	weekDay={forecast.weekDay} // día de la semana
	hour={forecast.hour}
	data={forecast.data}>
	</ForecastItem>));
}

renderProgress() {
	return (<h1 className='cargando-pronostico'>Cargando pronóstico extendido</h1>);
}
  render(){
    const {city} = this.props;
    const {forecastData} = this.state;
  return (
    <div>
    <h2 className='pronostico'>Pronóstico extendido para {city}</h2>
    {forecastData ?
    this.renderForecastItemDays(forecastData) :
    this.renderProgress()}
    </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}
export default ForecastExtended;