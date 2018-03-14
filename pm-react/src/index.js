import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // hay que importar Provider para usar redux así lo pide
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';


ReactDOM.render(

	<Provider store = { store }>
	<App /></Provider>, document.getElementById('root'));
registerServiceWorker();
