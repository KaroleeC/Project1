export default function(state=null, action){
  console.log('rest-reducer ', action.payload);
  switch(action.type) {
    case 'RESTAURANT_SELECTED':
      return action.payload;
      break;
  }
  return state;
}