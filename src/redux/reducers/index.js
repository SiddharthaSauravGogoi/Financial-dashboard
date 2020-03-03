import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';

const rootReducer = combineReducers({
  defaultValues: defaultReducer,
});

export default rootReducer;
