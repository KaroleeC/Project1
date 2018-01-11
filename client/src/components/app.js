//layout for app
import React from 'react';
import List from './restaurant-list';
import User from './userdisplay';
import Review from './DisplayReviews';
import Login from './login';
//add list to App div
const App = () => (
  <div>
      App div
      <Login/>
     <List/>
    <User/>
    
  </div>

)

export default App;