/* REDUX */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';



class LocationListContainer extends Component {

	 hadlerSelectionClick= city => {
    console.log('hadlerWeatherLocation ${city}');

    /*const action = {type: 'setState' , value: city}  esta action hay que crearla fuera porque no tiene que tocar parte del componente */

    //store.dispatch(setCity(city)); en app ya no estoy exportando store

    this.props.setCity(city);
  }

  render() {
  	return (
  		<LocationList cities={ this.props.cities } onSelectedLocation ={this.hadlerSelectionClick}/>
  		)
  }
}

/* Limpiando app.js ... trasladando código */
const mapDispatchToPropsActions = dispatch => ({ // dispatch pasa por cada city 
  setCity: value => dispatch(setCity(value))
}); // va a recorrer nuestro dispatch

/* paso 1 const AppConnected = connect(null, mapDispatchToPropsActions)(App) // AppConnected contiene todo porque ahora está enlazado con redux


export default AppConnected;*/

/* null es porque no se sabe en que ciudad está y cual va a elegir */
export default connect(null, mapDispatchToPropsActions)(LocationListContainer) 
