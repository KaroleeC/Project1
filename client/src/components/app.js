//layout for app
import React from 'react';
import List from './restaurant-list';
import User from './userdisplay';
import Review from './DisplayReviews';
import Search from './search'
import Restaurant from './restaurant-list'
//add list to App div
const App = () => (
  <div>
      App div
     <List/>
    <User/>
    <Search />
    <Restaurant />
  </div>

)

export default App;