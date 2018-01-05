import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



//create redux storage and pass reducers
const store = createStore();

render(<h1>Food</h1>, document.getElementById('app') );
