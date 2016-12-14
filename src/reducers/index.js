import { combineReducers } from 'redux';
import ResultReducer from './reducer_results';

const rootReducer = combineReducers({
  results: ResultReducer
});

export default rootReducer;