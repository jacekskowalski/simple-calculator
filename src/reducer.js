import { combineReducers } from 'redux';
import calculation from './calculateReducer';

const Reducer = combineReducers({
    calculator: calculation
})

export default Reducer