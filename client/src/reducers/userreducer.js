//function containing object for restaurant state data
const defaultState = {  
    id: 1,
    name: 'Kari',
    location: 'Riverside, CA',
    bio: 'blah, blah',
    searchyelp: 'false',

}


export default  function (state= defaultState, action){
    switch(action.type) {
        case "EDIT_BIO":
          return Object.assign({}, state, { bio: action.payload } )
          break;
        default:
          return state;
    
      }
      return state;
     }