//combine all reducers using combineReducers
import { combineReducers } from 'redux';
import restaurantReducer from './reducer-search-res';
import userreducer from './userreducer';
import reviewsreducer from './reviewsreducer';

const allreducers = combineReducers({

    restaurants: restaurantReducer,
    user: userreducer,
    reviews: reviewsreducer,
})

export default allreducers;