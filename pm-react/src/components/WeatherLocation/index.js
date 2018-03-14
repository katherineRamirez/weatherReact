import React, {Component} from 'react'; // siempre va este paso
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location'; // importar Location porque son hijos de WeatherLocation
import WeatherData from './WeatherData'; // importar WeatherData porque son hijos de WeatherLocation
import transformWeather from './../../services/transformWeather.js';
import './styles.css';
import './../../media.css';
// creando cont para llamar api
const api_key = '574b280b768b794f93cd4b0dd7085d38';
//const location = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather'
//const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`
/* este componente es una creación de react para poder crear constructor */
/* hay que importar component aunque esté creado en react arriba al lado de react */
/* constructor y super son objetos de javascript */
/* super hereda todo desde el constructor */
/* constructor es como persona y super es la persona */
/* state vive dentro de component */
/* primer estado antes de hacer click con data1 */
/* en handleUpdateClick después de hacer click el estado se cambia con setState */
class WeatherLocation extends Component {
    constructor ({ city }) {
            super();
            this.state = {
                city, 
                data: null
            }
    console.log('constructor')
    }
componentWillMount() {
    const {city} = this.state
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(api_weather).then(data => {

        return data.json();
    }).then(weather_data =>{
        const data = transformWeather(weather_data);
        this.setState({data})
    })
}
/* CICLOs DE VIDA*/ 
/*se ejecuta solo 1 vez y va antes de render 
componentWillMount(){
    console.log('componentWillMount')
}
componentDidMount(){
    console.log('componentDidMount')
}
/* se ejecuta despues del segundo render (después de la actualización click en actualizar) 
componentWillUpdate(){
    console.log('componentWillUpdate')
}
componentDidUpdate(){
    console.log('componentDidUpdate')
}*/

 render = () => {
     const { onWeatherLocationClick } = this.props;
     const {city, data} = this.state;
    return(
    /* datos del primer estado */
        <div className='weatherLocation' onClick={onWeatherLocationClick}>
        <Location city={city}/> 
        {data ? <WeatherData data={data}/> : <CircularProgress size={60} thickness={7} />} 
    </div>
        )
 }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick:PropTypes.func,
}
export default WeatherLocation;


