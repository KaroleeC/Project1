//layout for app
import React from 'react';
import List from './restaurant-list';
import User from './userdisplay';
import Review from './DisplayReviews';
//add list to App div
import Restaurant from './restaurant'
const App = () => (
  <div>
      App div
     <List/>
    <User/>
    
    <Restaurant />
  </div>

)

export default App;