import transformWeather from './transformWeather';
import moment from 'moment';
import 'moment/locale/es';

/*const transformForecast = (data) => ({}); // solo para probar que hay algo*/

const transformForecast = (data) => (
	data.list.filter(item => ( // filtrar para que me de el tiempo cada 6 horas
		moment.unix(item.dt).hour() === 6 ||// en la documentación de filter nos señala que hay que usar item 
		moment.unix(item.dt).hour() === 12 ||
		moment.unix(item.dt).hour() === 18 
		)).map(item =>(
			{
				weekDay: moment.unix(item.dt).format('ddd'), // pasamos los parámetros que queremos que se vean
				hour: moment.unix(item.dt).hour(),
				data: transformWeather(item)
			}

		))
	)


export default transformForecast;