//combine all reducers using combineReducers
import { combineReducers } from 'redux';
import restaurantsreducer from './restaurantsreducer';

const allreducers = combineReducers({

    restaurants: restaurantsreducer
})

export default allreducers;