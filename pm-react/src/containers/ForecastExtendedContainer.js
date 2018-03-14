/* REDUX */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
	render (){
		return(

			this.props.city &&    
    	<ForecastExtended city={this.props.city}></ForecastExtended>
	)
	}
}

const mapStateToProps = ({ city }) => (
	console.log(`este es el valor de mapStateToProps ${city}`), {city}
);


/* Forma de exportar en REDUX limpia y luego se le pasa el estado */
export default connect(mapStateToProps, null)(ForecastExtendedContainer)