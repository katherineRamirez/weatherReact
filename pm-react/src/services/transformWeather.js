// services transforma los datos de la api en array para manejarlo mejor
//No lleva import react porque no son componentes, sin 
//servicios que se le estan prestando a un componente
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
  THUNDER, 
  DRIZZLE
} from './../constant/weathers.js'; // segundo paso cuando modificamos las carpetas

const getWeatherState = weather => {
  const { id } = weather[0]; 
    if (id < 300) {
      return THUNDER;
    }else if (id < 400) {
      return DRIZZLE;
    }else if (id < 600) {
      return RAIN;
    }else if (id < 700) {
      return SNOW;
    }else if (id === 800) {
      return SUN;
    }else
      return CLOUDY;
    
  }

/* los valores humidity, temp, speed de la data se colocan así porque los estamos rescatando de la data */
const transformWeather = (weather_data) => {
  const {weather} = weather_data;
  const {
    humidity,
    temp
  } = weather_data.main;
  const {
    speed
  } = weather_data.wind;
  const weatherState = getWeatherState(weather);

  const data = {
    humidity,
    temperature: temp,
    weatherState,
    wind: `${speed} m/s`
  }
  return data;
}
export default transformWeather;