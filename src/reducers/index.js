// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import PeopleReducer from './people_reducer';

const rootReducer = combineReducers({
  people: PeopleReducer,
});

export default rootReducer;
