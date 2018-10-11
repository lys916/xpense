import { combineReducers } from 'redux';
import transReducer from './transReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    transactions: transReducer,
    user: userReducer
});

export default rootReducer;
