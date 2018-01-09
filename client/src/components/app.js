//layout for app
import React from 'react';
import List from './restaurant-list';
import User from './userdisplay';
import Review from './DisplayReviews';
//add list to App div
const App = () => (
  <div>
      App div
     <List/>
    <User/>
    
  </div>

)

export default App;