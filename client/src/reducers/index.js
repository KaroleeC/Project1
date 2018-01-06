//combine all reducers using combineReducers
import { combineReducers } from 'redux';
import restaurantsreducer from './restaurantsreducer';
import userreducer from './userreducer';
import reviewsreducer from './reviewsreducer';

const allreducers = combineReducers({

    restaurants: restaurantsreducer,
    user: userreducer,
    reviews: reviewsreducer
})

export default allreducers;