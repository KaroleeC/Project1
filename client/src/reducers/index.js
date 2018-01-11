//combine all reducers using combineReducers
import { combineReducers } from 'redux';
import restaurantsreducer from './restaurantsreducer';
import active_restaurantreducer from './active_restaurantreducer'
import userreducer from './userreducer';
import reviewsreducer from './reviewsreducer';

const allreducers = combineReducers({

    restaurants: restaurantsreducer,
    active_restaurant: active_restaurantreducer,
    restaurants: restaurantsreducer,
    user: userreducer,
    reviews: reviewsreducer
})

export default allreducers;