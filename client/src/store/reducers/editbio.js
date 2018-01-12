export default  function (state={value: false }, action){
  switch(action.type) {
    case "TOGGLE_BIO_EDIT":
      return Object.assign({}, state, { value: !state.value } )
      break;
    default:
      return state;

  }
  return state;
 }
 