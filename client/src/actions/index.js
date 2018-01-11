// import axios from 'axios'

// export const searchRestaurant = (inputValue) => {
//     console.log('inside of actions index.js here is the inputValue', inputValue);
//     return function(dispatch) {
//         dispatch({type: "RESTAURANT_SEARCH"});
//         axios.post('/search', {
//             term: inputValue
//         })
//         .then(function(response){
//             console.log('inside of .then axios')
//             console.log(response)
//             dispatch({type:"RESTAURANT_SEARCH_FULFILLED", payload: response.data})
//         })
//         .catch(function(err){
//             console.log(err)
//             dispatch({type:"RESTAURANT_SEARCH_REJECTED", payload:err})
//         })
//     }
// }

export const searchRestaurant = (data) => {
    console.log('inside of searchRestaurant action here is the data', data.businesses)
    return {
        type: "RESTAURANT_SEARCH",
        payload: data.businesses
    }
}