import React, { Component } from 'react'; // importa react "siempre va"
//import { connect } from 'react-redux'; // nos sirve para conectar react con redux desde nuestro origen
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid'; //flex-box grid https://www.npmjs.com/package/react-flexbox-grid
/*import { createStore } from 'redux'  // vamos a importar redux elemento que trae redux createStore */
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer'; // importando el componente creado en WeatherLocation.js
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
//import { setCity } from './actions'
import './App.css';

const cities = [
  'Santiago, scl',
  'Buenos Aires, ar', 
  'Ciudad de México, mx',
  'Madrid, es',
  'Rio de Janeiro, br',
  'London, uk'
];

// primera parte de nuestro store, va a ser nuestro reducer
//const store = createStore(() => {});

//const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()); 

/*const setCity = value => ({
  type: 'setCity',
  value
})*/

/* para usar el componente se escribe con etiquetas <WeatherLocation></WeatherLocation> */ 
/*class App extends Component {
  constructor(){
    super();
    this.state = {
      city: null
  }
}*/

/* manejador de estado 
  hadlerSelectionClick= city => {
    this.setState({city});
    console.log('hadlerWeatherLocation ${city}');

    /*const action = {type: 'setState' , value: city}  esta action hay que crearla fuera porque no tiene que tocar parte del componente 

    //store.dispatch(setCity(city)); en app ya no estoy exportando store

    this.props.setCity(city);
  }*/
class App extends Component {
  render() { 
    return(
      <MuiThemeProvider>
          <Grid>
            <Row>
              <Col xs={12}> 
                <AppBar title='Weather Location'/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
              <LocationListContainer cities={cities}>
              </LocationListContainer>
              </Col>
              <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  <ForecastExtendedContainer>
                  </ForecastExtendedContainer>  
                </div>
                </Paper>
              </Col>
            </Row>
          </Grid>
      </MuiThemeProvider>
    );
    
    
    // render (que quiero que me devuelva)
    // return (
    //   <MuiThemeProvider>
    //       <div className="App">
    //           <LocationList cities={cities}
    //           onSelectedLocation ={this.hadlerSelectionLocation}/>
    //       </div>
    //   </MuiThemeProvider>
    // );
  }
}

/* hasta aquí existe App y se valida... más abajo ya no existe App 
App.propTypes = {
  setCity: PropTypes.func.isRequired,
}*/

//const mapDispatchToPropsActions = () => {}; // 1 paso 
//const componentConnected = connect(null, mapDispatchToPropsActions)(App) // 2 paso

/*const mapDispatchToPropsActions = dispatch => ({ // dispatch pasa por cada city 
  setCity: value => dispatch(setCity(value))
}); // va a recorrer nuestro dispatch

/* paso 1 const AppConnected = connect(null, mapDispatchToPropsActions)(App) // AppConnected contiene todo porque ahora está enlazado con redux


export default AppConnected;*/

//export default connect(null, mapDispatchToPropsActions)(App) // App está alojando toda nuestra aplicación

export default App