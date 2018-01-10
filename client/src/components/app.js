//layout for app
import React from 'react';
import List from './restaurant-list';
import User from './userdisplay';
import Review from './DisplayReviews';
// import Search from './search'
//add list to App div
const App = () => (
  <div>
      App div
     <List/>
    <User/>
    {/* <Search /> */}
  </div>

)

export default App;