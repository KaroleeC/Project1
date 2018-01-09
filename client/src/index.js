import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //makes store available to all containers
import App from './components/app';
//import all reducers from reducers index
import allreducers from './reducers/index';


//create redux storage and pass reducers in createStore
//
const store = createStore(allreducers);

render(
<Provider store={ store }>
<App />
</Provider>
, document.getElementById('app') );
 
