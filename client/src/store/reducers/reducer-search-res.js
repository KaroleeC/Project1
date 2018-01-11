// export default function reducer(state = {
//     restaurants:[],
//     feching:false,
//     fetched:false,
//     error:null
// }, action) {

//     switch(action.type) {
//         case "RESTAURANT_SEARCH": {
//             return {...state, fetching: true}
//         }
//         case "RESTAURANT_SEARCH_REJECTED": {
//             return {...state, fetching:false, error:action.payload }
//         }
//         case "RESTAURANT_SEARCH_FULFILLED": {
//             return {...state, fetching:false, fetched:true, restaurants:action.payload}
//         }
//     }
//     return state;
    
// }
export default function (state = null, action) {
    switch (action.type) {
        case "RESTAURANT_SEARCH":
            return action.payload;
            break;
    }
    return state;
}