import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, BrowserHistory, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //makes store available to all containers
import App from './components/app.jsx';
import Login from './components/login'
//import all reducers from reducers index

import store from "./store";
//create redux storage and pass reducers in createStore
//

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exactly pattern="/" component={App} />
        </div>
      </BrowserRouter>
    )
  }
}
  

render(
  <Provider store={ store }>
  <Root />
  </Provider>
  , document.getElementById('app')
);
 
