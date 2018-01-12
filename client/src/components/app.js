//layout for app
import React from 'react';
import User from './userdisplay';
import Review from './DisplayReviews';
import Login from './login';
import Search from './search'
import Restaurants from './restaurant-list'
//add list to App div
import Restaurant from './restaurant'
const App = () => (
  <div>
      App div
      <Login/>
    <User/>
    
    <Search />
    <Restaurants />
  </div>

)

export default App;